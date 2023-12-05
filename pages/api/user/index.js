// /user/: just a test to user

const { notFound, success, serverError, badRequest, methodNotAllowed } = require('../../../utils/mockResponse')
const { users } = require('../../../utils/postgre/models')
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
            username: { type: "string", min: 3, max: 255 },
            email: {type: "email"},
            dob: { type: 'date', convert: true, format: 'YYYY-MM-DD' },
            password: {type: 'string'}

        }
        const validateResponse = this.v.validate(data, schema)
        return validateResponse
    }

    //post: "http://localhost:3000/api/user/"  
    async postUser (req, res){
        try {
            //req destructurelize
            const data = req.body;
            const { email, username, dob, password } = data;
            //const userID = req.query.userID

            //Validate
            if ( !email || !username || !dob || !password ){
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

            //database logic
            //Hien tai dang la de user thaoi mai khong co cai gi bi trung - van create thoai mai
            const user = await users.create({
                email: email,
                username: username,
                password: password,
                dob: dob
            })
            //response
            return success(res, user, { message: "user has been added"});
        }
        catch (err) {
            console.log(err);
            return serverError(res, 'error while adding data...');
        }
    }

    //get: "http://localhost:3000/api/user/"
    async getAllUser (req, res){
        try{   
            //destructurelise request
            let data;  
            //database logic
            data = await users.findAll({});
            //validate
            if (!data){
                return notFound(res, {error: "get all users data not found..."});
            }

            //response
        return success(res, data, { message: "Get all users successfully" });
        }   catch (err) {
                console.log(err);
                return serverError(res, 'Error while getting user with ID...');
            }
    }
}

export default async function requestHandler(req, res){
    try {
        const controller = new Controller();

    //Database Logic
        switch (req.method){
            case 'GET':
                return controller.getAllUser(req, res)
            case 'POST':
                return controller.postUser(req, res)
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