"use strict";
const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const insertTodo = async (event) => {

  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  const { todo } = JSON.parse(event.body);
  const createdAt = new Date().toISOString();
  const id = v4();
  const newTodo = {
    id,
    todo,
    createdAt,
    completed: false
  }
  await dynamoDb.put({
    TableName: "doTask",
    Item: newTodo
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(newTodo),
    };
};

module.exports = {
    handler: insertTodo,
};