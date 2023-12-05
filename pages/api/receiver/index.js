// /receiver/: display all receiver 

const { notFound, success, serverError, badRequest, methodNotAllowed } = require('../../../utils/mockResponse')
const { receivers, users } = require('../../../utils/postgre/models')
const validator = require('fastest-validator')

class Controller {
    constructor(){
        this.notFound = notFound;
        this.success = success;
        this.badRequest = badRequest;
        this.serverError = serverError;
        this.methodNotAllowed = methodNotAllowed;
        this.v = new validator();
    }
    validate(data){
        const schema = {
            name: { type: "string", min: 3, max: 255 },
            email: {type: "email"}
        }
        const validateResponse = this.v.validate(data, schema)
        return validateResponse
    }

    //post: "http://localhost:3000/api/receiver/"  
    async postReceiver (req, res){
        try {
            //req destructurelize
            const data = req.body;
            const { email, name } = data;
            const userID = 4;
            //const userID = req.query.userID

            //Validate
            if ( !email || !name ){
                console.log(email)
                console.log(data)
                return badRequest(res, {error:"Please provide full information..."});
            }
            const EMAIL_VALIDATION = /^[\w-\.]+@([\w-]+\.)+[\w-]{3,4}$/; 
            if (!EMAIL_VALIDATION.test(email)){
                return badRequest(res, {error:"Email wrong format"});
            }
            let val = this.validate(data)
            if (val !== true){
                console.log(data)
                return badRequest(res, {error: "Data is not validated..."})
            }

            //Find user:
            const user = await users.findByPk(userID)
            if (user === null){
                return notFound(res, {error: "user did not existed..."})
            }

            //database logic
            const [receiver, created] = await receivers.findOrCreate({
                where: { email: email },
                defaults: {
                    name: name,
                    userID: userID,
                }
            });   
            if (!created) {
                return success(res, receiver, { message: "Receiver already existed." });
            }
            //response
            return success(res, receiver, { message: "receiver has been added"});
        }
        catch (err) {
            console.log(err);
            return serverError(res, 'error while adding data...');
        }
    }

    //get: "http://localhost:3000/api/receiver/"
    async getAllReceiver (req, res){
        const userID = 4;
        //const userID = req.query.userID
        const user = await users.findByPk(userID)
            if (user === null){
                return notFound(res, {error: "user did not existed..."})
            }

        try{   
            //destructurelise request
            let data;  
            //database logic
            data = await user.getReceivers();
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
            // case 'PATCH':
            //     return controller.patchReceiver(req, res)
            // case 'DELETE':
            //     return controller.deleteReceiver(req, res)
        }
    } catch (err) {
        console.log(err);
        return methodNotAllowed(res, { message: 'METHOD IS NOT ALLOWED'});
    }
}