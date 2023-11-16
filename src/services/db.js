const { JsonDB, Config } = require('node-json-db');
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

    listAll: async function () {

        try {
            return await db.getData(`/`);
        } catch (error) {
            return [];
        }
    },

    add: async function (id, from, to, text) {

        try {

            let now = new Date();

            sms.smsId = id;
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

            response.isSuccess = false;
            response.message = error;
            console.error(error);
        }
    },

    edit: async function (id, from, to, text) {

        try {

            let exist = await db.exists(`/${id}`);

            if (exist) {

                this.add(id, from, to, text);
    
                response.isSuccess = true;
                response.message = `SMS '${sms.smsId}' updated`;
                return response;
            }
            else {
                return this.add(id, from, to, text);
            }           

        } catch (error) {

            response.isSuccess = false;
            response.message = error;
            console.error(error);
        }
    },

    delete: async function (id) {

        try {

            let exist = await db.exists(`/${id}`);

            if (exist) {
                await db.delete(`/${id}`);
                response.isSuccess = true;
                response.message = `SMS '${id}' deleted`;
            }
            else {
                response.isSuccess = false;
                response.message = `SMS '${id}' not exist`;
            }

            return response;

        } catch (error) {

            response.isSuccess = false;
            response.message = error;
            console.error(error);
        }
    }
}

module.exports = methods;