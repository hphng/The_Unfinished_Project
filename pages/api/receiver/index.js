import { notFound, success, serverError } from '../../../utils/mockResponse'
const {receivers } = require('../../../utils/postgre/models')
//console.log(db.receivers)
export default async function postUser(req, res){
    try{
        const data = req.body;
        const { email, name } = data;
        console.log(data)
    
    //Validate data null
        if (!email || ! name){
            console.log(data)
            return notFound(res, {error: "Please provide full information"});
        }

    //Validate wrong format
        const EMAIL_VALIDATION = /^[\w-\.]+@([\w-]+\.)+[\w-]{3,4}$/;        //regex concac
        if (!EMAIL_VALIDATION.test(data.email)){
            return notFound(res, {error: "Please provide a correct Email"});
        }
    
    //Other Validation here
 
    //Do sth with the Database here
    //  const receivers = db.receivers
        await receivers.create({ email, name})
    
    //Response
        return success(res, data, { message: "User data received and validated successfully" });
    }
    catch (err) {
        console.log(err);
        return serverError(res, { error: err });
      }
}