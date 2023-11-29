import { notFound, success, serverError, badRequest, methodNotAllowed } from '../../../utils/mockResponse'
import { receivers } from '../../../utils/postgre/models'

class Controller {
    constructor(){
        this.notFound = notFound;
        this.success = success;
        this.badRequest = badRequest;
    }

    //post: "http://localhost:3000/api/receiver/0"  
    async postReceiver (req, res){
        try {
            //req destructurelize
            const data = req.body;
            const { email, name } = data;

            //Validate
            if ( !email || !name){
                console.log(data)
                return badRequest(res, {error:"Please provide full information"});
            }

            const EMAIL_VALIDATION = /^[\w-\.]+@([\w-]+\.)+[\w-]{3,4}$/; 
            if (!EMAIL_VALIDATION.test(email)){
                return badRequest(res, {error:"Email wrong format"});
            }
            //database logic
            await receivers.create({email, name})

            //response
            return success(res, data, { message: "data has been added"});
        }
        catch (err) {
            console.log(err);
            return serverError(res, 'error while adding data...');
        }
    }

    //get: "http://localhost:3000/api/receiver/0" 
    async getAllReceiver (req, res){
        try {
        //req destructurelize

        //Validate

        //database logic
        const data = await receivers.findAll({})
        //response
        return success(res, data, {message: "Get all users. Complete !"});
        } catch (err) {
            console.log(err);
            return serverError(res, 'error while getting all users...');
        }
    }
}

export default async function requestHandler(req, res){
    try {
        const controller = new Controller();

    //Database Logic
        switch (req.method){
            case 'GET':
                return controller.getAllReceiver(req, res)
            case 'POST':
                return controller.postReceiver(req, res)
        }
    } catch (err) {
        console.log(err);
        return methodNotAllowed(res, { message: 'METHOD IS NOT ALLOWED'});
    }
}