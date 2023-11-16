//import { JsonDB, Config } from "node-json-db";
const { JsonDB, Config } = require('node-json-db');
const response = require('../models/response');
const sms = require('../models/sms');
const smsbase = require('../models/smsbase');


var db = new JsonDB(new Config("simpledb", true, true, '/'));

var methods = {

    get: async function (id) {

        return await db.getData("B1212");

        sms.smsId = id;
        sms.from = "From";
        sms.to = "To";
        sms.text = "Hello";
        sms.createdTime = Date.now;
        return sms;

    },

    add: async function (id, from, to, text) {

        try {
            /*
            smsbase.id = id;
            smsbase.from = from;
            smsbase.to = to;
            smsbase.text = text;
            await db.push(id, from);
            */

            await db.push(`/${id}`, `${id}, ${from}, ${to}, ${text}`);

            response.isSuccess = true;
            response.message = `SMS ${id} added`;
            return response;

        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = methods;