# Graphql Lambda

## Configure
`cp config.example.json config.json`


## Upload
`zip -r ../graphqlAws.zip . && aws lambda update-function-code --function-name graphqlAws --zip-file fileb:///path/to/graphqlLambda.zip`

## Query

### health
`curl -v  -H "Content-Type: application/json" "https://exl1b1c7fk.execute-api.us-west-2.amazonaws.com/dev/graphalAws" -d '{"query": "{ health }"}'`
### add entry
`curl -v  -H "Content-Type: application/json" "https://exl1b1c7fk.execute-api.us-west-2.amazonaws.com/dev/graphalAws" --data @queries/addEntry.json | json_pp'`

### get entry
`curl -v  -H "Content-Type: application/json" "https://exl1b1c7fk.execute-api.us-west-2.amazonaws.com/dev/graphalAws" --data @queries/getEntry.json | json_pp'`

### get entries
`curl -v  -H "Content-Type: application/json" "https://exl1b1c7fk.execute-api.us-west-2.amazonaws.com/dev/graphalAws" --data @queries/getEntries.json | json_pp`

### drop entry
`curl -v  -H "Content-Type: application/json" "https://exl1b1c7fk.execute-api.us-west-2.amazonaws.com/dev/graphalAws" --data @queries/dropEntry.json | json_pp'`
