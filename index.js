'use strict';

require('env2')('.env');
const { graphql } = require('graphql');
const isEmpty = require('lodash.isempty');
const schema = require('./schema');

exports.handler = (event, context, cb) => {

  console.info('ingress event', event);

  const variables = event.variables && !isEmpty(event.variables) ?
    JSON.parse(event.variables) : {};

  graphql(schema, event.query, null, variables)
    .then(data => cb(null, data))
    .catch(cb);
};
