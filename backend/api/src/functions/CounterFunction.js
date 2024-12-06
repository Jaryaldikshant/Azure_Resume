const { CosmosClient } = require('@azure/cosmos');
const { app } = require('@azure/functions');

// Cosmos DB connection details
const cosmosDbConnectionString = process.env.CosmosDBConnectionString;
const databaseId = process.env.DATABASE_ID || 'YourDatabaseName';
const containerId = process.env.CONTAINER_ID || 'YourContainerName';

// Initialize Cosmos Client
const client = new CosmosClient(cosmosDbConnectionString);

// Function to get or create the document in Cosmos DB
async function getVisitCount() {
    try {
        const { database } = await client.databases.createIfNotExists({ id: databaseId });
        const { container } = await database.containers.createIfNotExists({ id: containerId });

        // Query to check for the document with id = "1"
        const { resources } = await container.items.query('SELECT * FROM c WHERE c.id = "1"').fetchAll();
        console.log('Query Result:', resources);

        if (resources.length === 0) {
            // If no document exists with id = "1", create one with a count of 1
            const newItem = { id: '1', count: 1 };
            await container.items.create(newItem);
            console.log('Created new item with id = "1" and count: 1');
            return newItem.count;
        } else {
            // Return the current count from the document with id = "1"
            console.log('Existing visit count for id "1":', resources[0].count);
            return resources[0].count;
        }
    } catch (error) {
        console.error("Error getting visit count:", error);
        throw new Error(`Failed to retrieve visit count from Cosmos DB: ${error.message}`);
    }
}

// Function to update the visit count in Cosmos DB
async function updateVisitCount() {
    try {
        const { database } = await client.databases.createIfNotExists({ id: databaseId });
        const { container } = await database.containers.createIfNotExists({ id: containerId });

        // Query to fetch the document with id = "1"
        const { resources } = await container.items.query('SELECT * FROM c WHERE c.id = "1"').fetchAll();
        console.log('Query Result:', resources);

        let updatedItem;
        if (resources.length === 0) {
            // If the document doesn't exist with id = "1", create one with count 1
            updatedItem = { id: '1', count: 1 };
            console.log('Created new item with id = "1" and count: 1');
        } else {
            // If the document exists with id = "1", increment the count
            updatedItem = resources[0];
            updatedItem.count += 1;
            console.log('Updated visit count for id "1":', updatedItem.count);
        }

        // Use upsert to insert or update the document
        const result = await container.items.upsert(updatedItem);
        console.log('Upsert result:', result.resource);

        return result.resource.count;
    } catch (error) {
        console.error("Error updating visit count:", error);
        throw new Error(`Failed to update visit count in Cosmos DB: ${error.message}`);
    }
}

// Define the HTTP function
app.http('CounterFunction', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        try {
            // Increment the visit count in Cosmos DB
            const updatedCount = await updateVisitCount();
            // Return the updated visit count
            return { body: JSON.stringify({ count: updatedCount }) };
        } catch (error) {
            context.log("Error occurred while updating the visit count:", error.message);
            return {
                status: 500,
                body: JSON.stringify({ error: error.message }),
            };
        }
    }
});