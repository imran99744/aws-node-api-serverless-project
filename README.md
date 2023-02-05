# Project Overview
This project is a Node.js API that is deployed on AWS Lambda using the Serverless framework. The API provides endpoints to perform CRUD operations on a database.

## Architecture
The API consists of AWS Lambda functions that are triggered by HTTP requests. The functions interact with an Amazon DynamoDB database to perform CRUD operations. The API is deployed using the Serverless framework, which simplifies the deployment process and makes it easy to manage the infrastructure.

## Dependencies
- Node.js
- Serverless framework
- AWS CLI
- Amazon DynamoDB

## Installation
1. Install Node.js and the AWS CLI
2. Install the Serverless framework by running the following command:
`npm install -g serverless
`

3. Clone the repository to your local machine
4. Nigate to the project directory and run the following command to install the project dependencies:
`npm install
`

## Deployment
1. Create an Amazon DynamoDB table to store the data.
2. Configure the AWS CLI with your AWS credentials.
3. Navigate to the project directory and run the following command to deploy the API:
`serverless deploy`

## Usage
The API provides the following endpoints:

- `GET /getTodo:` Retrieve a list of all items in the database
- `POST /insertTodo:` Add a new item to the database
- `PUT /finishTodo/{id}:` Update an existing item in the database

## Conclusion
This Node.js API provides a simple and scalable solution for performing CRUD operations on a database. By deploying the API on AWS Lambda and using the Serverless framework, you can take advantage of using serverless architecture include reduced operational costs, increased scalability, improved resiliency, and increased focus on application development.
