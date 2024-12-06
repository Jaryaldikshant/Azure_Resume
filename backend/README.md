# Your backend lives here

## Setting up our Cosmos DB resources
- We'll create our Cosmos DB account, database and contianer and data.

- Go to the Azure Cosmos DB, Select the noSql service(Azure refers to its SQL API as "NoSQL" in the Azure portal to reflect its multi-model, non-relational database capabilities)

- Go to the Data Explorer , create a new database and then create the container(counter) using that database

- Now add items to the counter { "id" : "1","count" : 0, }, now save the item.



## Setting up our Azure Function
- We'll create our Azure function to interact with our Cosmos DB counter data.

- We set up the azure function using VS code Extension

- Download the azure function extension in vs code

- Now select the api folder and create all  the files in api

- now go to the GetResume.cs file in the terminal and use <func start> command it will run the azure function (this HTTP triggered function executed successfully)

## Test Locally
- We'll test our function locally and make sure we can view our counter data in the browser and in our website locally.

