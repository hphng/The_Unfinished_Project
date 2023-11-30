
import { notFound, success, serverError, badRequest, methodNotAllowed } from '../../../utils/mockResponse'
import { receivers } from '../../../utils/postgre/models'

class Controller {
    constructor(){
        this.notFound = notFound;
        this.success = success;
        this.badRequest = badRequest;
        this.serverError = serverError;
        this.methodNotAllowed = methodNotAllowed;
    }
    //post: "http://localhost:3000/api/receiver/0"  
    async postReceiver (req, res){
        try {
            //req destructurelize
            const id = req.query.id
            const data = req.body;
            const { email, name, userID } = data;
            
            //Validate
            if (id !== '0')
                return badRequest(res, {error: "wrong id URL"})
            if ( !email || !name || !userID){
                console.log(data)
                return badRequest(res, {error:"Please provide full information"});
            }

            const EMAIL_VALIDATION = /^[\w-\.]+@([\w-]+\.)+[\w-]{3,4}$/; 
            if (!EMAIL_VALIDATION.test(email)){
                return badRequest(res, {error:"Email wrong format"});
            }
            //database logic
            await receivers.create({email, name, userID})

            //response
            return success(res, data, { message: "data has been added"});
        }
        catch (err) {
    
            console.log(err);
            return serverError(res, 'error while adding data...');
        }
    }

    //get: "http://localhost:3000/api/receiver/0" 
    //get: "http://localhost:3000/api/receiver/[id != 0]"
    async getReceiverByID (req, res){
        try{   
            //destructurelise request
            const querID = req.query.id;
            let data;
            //validate
                
            //database logic
            if (req.query.id === '0'){
                data = await receivers.findAll({})
            } else{
                data = await receivers.findAll({
                    where: {
                        id: querID
                    }
                })
            } 
            //validate
            if (!data){
                return notFound(res, {error: "Error while getting user data"});
            }
            //response
        return success(res, data, { message: "Get user data by ID successfully" });
        }   catch (err) {
                console.log(err);
                return serverError(res, 'Error while getting user with ID');
            }
    }

    //patch: "http://localhost:3000/api/receiver/[id != 0]"
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

    //delete: "http://localhost:3000/api/receiver/[id != 0]"
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
            case 'POST':
                return controller.postReceiver(req, res)
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