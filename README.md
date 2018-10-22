# Graphql Lambda Patterns

Create/read/update/delete an `Entry` object based on graphql. The graphql server is hosted as a lambda function and triggered via the AWS-API gateway.

## Configure
`cp lambda/config.example.json lambda/config.json`

## Upload
`cd lambda && npm install && zip -r ../graphqlAws.zip . && aws lambda update-function-code --function-name graphqlAws --zip-file fileb:///path/to/graphqlLambda.zip`

## Query

### health
`curl  -s -w \\n%{time_total}sec\\n -H "Authorization: idToken" -H "Content-Type: application/json" "https://exl1b1c7fk.execute-api.us-west-2.amazonaws.com/dev/graphalAws" -d '{"query": "{ health }"}'`
### add entry
`curl -v -H "Authorization: idToken" -H "Content-Type: application/json" "https://exl1b1c7fk.execute-api.us-west-2.amazonaws.com/dev/graphalAws" --data @lambda/queries/addEntry.json | json_pp'`

### get entry
`curl -v -H "Authorization: idToken" -H "Content-Type: application/json" "https://exl1b1c7fk.execute-api.us-west-2.amazonaws.com/dev/graphalAws" --data @lambda/queries/getEntry.json | json_pp'`

### get entries
`curl -v -H "Authorization: idToken" -H "Content-Type: application/json" "https://exl1b1c7fk.execute-api.us-west-2.amazonaws.com/dev/graphalAws" --data @lambda/queries/getEntries.json | json_pp`

### drop entry
`curl -v -H "Authorization: idToken" -H "Content-Type: application/json" "https://exl1b1c7fk.execute-api.us-west-2.amazonaws.com/dev/graphalAws" --data @lambda/queries/dropEntry.json | json_pp'`

## Launch App

`cd client && npm install && react-native run-ios`
