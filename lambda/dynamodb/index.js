'use strict';
const Promise = require('bluebird');
const aws = require('aws-sdk');
const config = require('../config.json');

aws.config.update(config.aws.credentials);
const db = new aws.DynamoDB.DocumentClient();

Promise.promisifyAll(db, {context: db});

exports.getEntries = () => {

  const params = {
    TableName: config.aws.tableName,
    Limit: config.aws.pageSize
  };

  return db.scanAsync(params).then((data) => {
    return data.Items;
  });

};

exports.getEntry = (id) => {

  const params = {
    TableName: config.aws.tableName,
    Key: {
      id
    }
  };

  return db.getAsync(params).then((data) => {
    return data.Item;
  });

};

exports.addEntry = (id, name) => {

  const params = {
    TableName: config.aws.tableName,
    Item: {
      id,
      name
    }
  }

  return db.putAsync(params).then((data) => {
    return {id, name};
  });

};

exports.dropEntry = (id) => {
  const params = {
    TableName: config.aws.tableName,
    Key: {
      id
    }
  }

  return db.deleteAsync(params);
}
