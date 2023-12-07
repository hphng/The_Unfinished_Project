// /receiver/id: display all document of a receiver id
const { notFound, success, serverError, badRequest, methodNotAllowed } = require('../../../../utils/mockResponse')
const { receivers } = require('../../../../utils/postgre/models')
const Validator = require("fastest-validator")

class Controller {
    constructor(){
        this.notFound = notFound;
        this.success = success;
        this.badRequest = badRequest;
        this.serverError = serverError;
        this.methodNotAllowed = methodNotAllowed;
        this.v = new Validator();
    }
    validate(data){
        const schema = {
            name: { type: "string", min: 3, max: 255 },
            email: {type: "email"}
        }
        const validateResponse = this.v.validate(data, schema)
        return validateResponse
    }
 
    //get: "http://localhost:3000/api/receiver/[id]"
    async getReceiverByID (req, res){
        try{   
            //destructurelise request
            const querID = req.query.id;
            let data;
            //validate
                
            //database logic
            // data = await receivers.findAll({
            //     where: {
            //         id: querID
            //     }
            // })
            data = await receivers.findByPk(querID);

            //validate
            if (!data){
                return notFound(res, {error: "Error while getting user data..."});
            }
            val = this.validate(data)
            if (val !== true){
                console.log(data)
                return badRequest(res, {error: "Data is not validated..."})
            }
            //response
        return success(res, data, { message: "Get user data by ID successfully" });
        }   catch (err) {
                console.log(err);
                return serverError(res, 'Error while getting user with ID');
            }
    }

    //patch: "http://localhost:3000/api/receiver/[id]"
    async patchReceiver (req, res){
        try{
            //destructurelize
            const data = req.body
            const { email, name } = data
            const id = req.query.id

            //validate - should we validate duplication in here
            if (!email || !name ) {
                console.log(email, name)
                return badRequest(res, { error: "Please provide full information" });
              }
            const EMAIL_VALIDATION = /^[\w-\.]+@([\w-]+\.)+[\w-]{3,4}$/; 
            if (!EMAIL_VALIDATION.test(email)){
                return badRequest(res, {error:"Email wrong format"});
            }
            val = this.validate(data)
            if (val !== true){
                console.log(data)
                return badRequest(res, {error: "Data is not validated..."})
            }

            //database logic
            await receivers.update({email, name}, { 
                where: { id: id } })

            //response
            return success(res, data, { message: "Update user data successfully" }); 
        }
        catch (err) {
            console.log(err);
            return serverError(res, 'error while patching receiver information');
        }
    }

    //delete: "http://localhost:3000/api/receiver/[id]"
    async deleteReceiver (req, res){
        try{
            //destructurelize
            const querID = req.query.id
            //validation

            //database logic
            await receivers.destroy({
                where: { id: querID}
            })
            //response
            return success(res, { message: "Delete receiver successfully" }); 
        }
        catch (err) {
            console.log(err);
            return serverError(res, "error while delete receiver data");
        }
    }
}

export default async function requestHandler(req, res){
    try {
        const controller = new Controller();

    //Database Logic
        switch (req.method){
            case 'GET':
                return controller.getReceiverByID(req, res)
            // case 'POST':
            //     return controller.postReceiver(req, res)
            case 'PATCH':
                return controller.patchReceiver(req, res)
            case 'DELETE':
                return controller.deleteReceiver(req, res)
        }
    } catch (err) {
        console.log(err);
        return methodNotAllowed(res, { message: 'METHOD IS NOT ALLOWED'});
    }
}