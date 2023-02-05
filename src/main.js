"use strict";

const main = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello From Serverless!",
      },
      null,
      2
    ),
  };
};


module.exports = {
    handler: main,
};