import { notFound, success, serverError } from '../../../utils/mockResponse'
const {receivers } = require('../../../utils/postgre/models')


class ReceiverController {
    // GET request to retrieve user by ID
    async getAllReceivers(req, res){
        const rec = await receivers.findAll({})
        return success(res, rec, { message: "Get all users" });
    }


    async getReceiverbyID(req, res) {
        console.log(req.query)
        try {
            const querID = req.query.id;
            console.log(querID)
        //Database Logic
            // const data = await receivers.findAll({
            //     where: {
            //         name: key
            //     }
            // })
            const data = await receivers.findAll({
                where: {
                    id: querID
                }
            })

        //Response
            if (!data) {
                return notFound(res, {error: "Please provide full information"});
            }
            return success(res, data, { message: "User data received and validated successfully" });

        }

        catch (err) {
            console.log(err);
            return serverError(res, { error: err });
        }
    }
  
    // PUT request to update user details
    async updateUser(req, res) {
        try {
        //Request destructurelize
            const { receiver } = req.params;

        //Database Logic
            const data = await receivers.findAll()

        //Response
            if (!data) {
                return notFound(res, {error: "Please provide full information"});
            }
            return success(res, data, { message: "User data received and validated successfully" });
        }
        catch (err) {
            console.log(err);
            return serverError(res, { error: err });
        }

    }
  
    // DELETE request to delete a user
    async deleteUser(req, res) {
        try {
            const { receiver } = req.params;

        //Database Logic
            const data = await receivers.findAll()

        //Response
            if (!data) {
                return notFound(res, {error: "Please provide full information"});
            }
            return success(res, data, { message: "User data received and validated successfully" });
        }
        catch (err) {
            console.log(err);
            return serverError(res, { error: err });
        }

    }
  }

export default async function requestHandler(req, res){
    try {
    //Request destructurelize
        const controller = new ReceiverController()
        const { method } = req;

    //Database Logic
        switch (method){
            case 'GET':
                return controller.getReceiverbyID(req, res)
            case 'UPDATE':
                return controller.updateUser(req, res)
            case 'DELETE':
                return controller.deleteUser(req, res)
        }
    }
    catch (err) {
        console.log(err);
        return serverError(res, { error: err });
    }
}