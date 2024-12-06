const { CosmosClient } = require('@azure/cosmos');

module.exports = async function (context, req) {
    // Get the Cosmos DB connection string from environment variables
    const cosmosDbConnectionString = process.env.CosmosDBConnectionString;

    // Initialize the CosmosClient with the connection string
    const client = new CosmosClient(cosmosDbConnectionString);

    try {
        // Connect to the database and container
        const { database } = await client.databases.createIfNotExists({ id: "AzureResumedb" });
        const { container } = await database.containers.createIfNotExists({ id: "Counter" });

        // Query or perform operations with Cosmos DB
        const { resources: items } = await container.items.query("SELECT * FROM c WHERE c.id = 'visitCount'").fetchAll();


        // Return results to the client
        context.res = {
            body: items,  // Return fetched data
            status: 200
        };
    } catch (error) {
        // Handle errors if any
        context.res = {
            body: `Error connecting to Cosmos DB: ${error.message}`,
            status: 500
        };
    }
};




