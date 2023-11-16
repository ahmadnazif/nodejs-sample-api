# nodejs-sample-api

This is a simple API server that build using NodeJS and Express. This app is connected to `node-js-db` database as data storage

## Dependency used
- ExpressJS
- uuid
- node-json-db

## Data storage
- This app use a very simple document base storage called `node-json-db`. Data is persisted there. You may change the document by navigating to `/src/servies/db.js` and change the filename in `Config`.

## Running sample
- Clone this repo
- Make sure your machine has Node.js installed
- Restore all dependency
- Navigate to `src` folder
  - In `app.js` Set your preferred port. The default here is `5678`
  - Run: `node app.js`
 
## Endpoints:
### `/` (HTTP GET)
- Just a landing page
### `/sms/get` (HTTP GET)
- Get one sms
- Query string: `id`
- Example: `BASE-URL/sms/get?id=ABC123`
### `/sms/list-all` (HTTP GET)
- List all sms
- No query string
- Example: `BASE-URL/sms/list-all`  
### `/sms/add` (HTTP POST)
 - Add one sms
 - Require JSON body to add the data. The `smsId` for this SMS is automatically generated
 - Example: `BASE-URL/sms/add`
 - JSON BODY:
```json
{
	"from": "TestFrom",
	"to": "TestTo",
	"text": "TestText"
}
```
### `/sms/edit` (HTTP PUT)
- Edit one sms
- Require JSON body to edit the data. The `smsId` must be supplied
- Example: `BASE-URL/sms/edit`
- JSON BODY:
```json
{
	"smsId": "ABC123",
	"from": "TestFrom",
	"to": "TestTo",
	"text": "TestText"
}
```
### `/sms/delete` (HTTP DELETE)
- Delete one sms
- Query string: `id`
- Example: `BASE-URL/sms/delete?id=ABC123`
