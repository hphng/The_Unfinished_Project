import { notFound, success, serverError } from './mockResponse'
const { receivers } = require('../postgre/models')

export default class ReceiverController {
    constructor(){
        console.log("Here is the Receiver Controller class")
    }
    //asynchronous: independently from the main flow (normally, system will wait task A complete to exceute task B. but async task will get to independent branch -> parallelly handle async task with the main flow)
    async createReceiver (req, res){
        try {
            //req destructurelize
            const data = req.body;
            const { email, name } = data;

            //Validate
            if ( !email || !name){
                console.log(data)
                return notFound(res, {error:"Please provide full information"});
            }

            const EMAIL_VALIDATION = /^[\w-\.]+@([\w-]+\.)+[\w-]{3,4}$/; 
            if (!EMAIL_VALIDATION.test(email)){
                return notFound(res, {error:"Email wrong format"});
            }
            //database logic
            await receivers.create({email, name})

            //response
            return success(res, data, { message: "User data received and validated successfully"});
        }
        catch (err) {
            console.log(err);
            return serverError(res, { error: err });
        }
    }

    async getAllReceiver (req, res){
        try {
        //req destructurelize

        //Validate

        //database logic
        const data = await receivers.findAll({})
        //response
        return success(res, data, {message: "Get all users. Complete !"});
        } 
        catch (err) {
            console.log(err);
            return serverError(res, { error: err });
        }
    }

    async getReceiverbyID (req, res){
        try{   
        //destructurelise request
            const querID = req.query.id;
        //validate
            
        //database logic
            const data = await receivers.findAll({
                where: {
                    id: querID
                }
            })
        //validate
        if (!data){
            return notFound(res, {error: "Please provide full information"});
        }
        //response
        return success(res, data, { message: "Get user data by ID successfully" });
 
        }
        catch (err) {
            console.log(err);
            return serverError(res, { error: err });
        }
    }

    async updateReceiver(req, res){
        try{
            //destructurelize
            const data = req.body
            const {email, name} = data
            const id = req.query.id

            //validate - should we validate duplication in here
            if (!email || !name) {
                console.log(email, name)
                return notFound(res, { error: "Please provide full information" });
              }

            const EMAIL_VALIDATION = /^[\w-\.]+@([\w-]+\.)+[\w-]{3,4}$/; 
            if (!EMAIL_VALIDATION.test(email)){
                return notFound(res, {error:"Email wrong format"});
            }

            //database logic
            await receivers.update({email, name}, { 
                where: { id: id } })

            //await receivers.
            //response
            return success(res, data, { message: "Update user data successfully" }); 
        }
        catch (err) {
            console.log(err);
            return serverError(res, { error: err });
        }
    }

    async deleteReceiver (req, res){
        try{
            //destructurelize
            const querID = req.query.id
            //database logic
            await receivers.destroy({
                where: { id: querID}
            })
            //response
            return success(res, { message: "Delete receiver successfully" }); 
        }
        catch (err) {
            console.log(err);
            return serverError(res, { error: err });
        }
    }

}

//module.exports = ReceiverController;