//import { JsonDB, Config } from "node-json-db";
const { JsonDB, Config } = require('node-json-db');
 const uuid = require('uuid');
const response = require('../models/response');
const sms = require('../models/sms');
const smsbase = require('../models/smsbase');


var db = new JsonDB(new Config("simpledb", true, true, '/'));

var methods = {

    get: async function (id) {

        try {
            return await db.getData(`/${id}`);
        } catch (error) {
            return null;
        }
    },

    listAll: async function(){

        try {
            return await db.getData(`/`);
        } catch (error) {
            return [];
        }
    },

    add: async function (from, to, text) {

        try {
            
            let now = new Date();

            sms.smsId = uuid.v4();
            sms.from = from;
            sms.to = to;
            sms.text = text;
            sms.createdTimeUtc = now.toISOString();
            var data = JSON.stringify(sms);

            await db.push(`/${sms.smsId}`, data)

            response.isSuccess = true;
            response.message = `SMS '${sms.smsId}' added`;
            return response;

        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = methods;