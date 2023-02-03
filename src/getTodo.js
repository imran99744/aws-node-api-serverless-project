"use strict";
const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const getTodo = async (event) => {

  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  let todo;

  try{
  const result = await dynamoDb.scan({
    TableName: "doTask"
  }).promise();
  todo = result.Items;
  }catch(err){
    console.log(err);
  }
  
  return {
    statusCode: 200,
    body: JSON.stringify(todo),
    };
};

module.exports = {
    handler: getTodo,
};