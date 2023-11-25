
import ReceiverController from '../../../utils/apiController/receiverController';

export default async function requestHandler(req, res){
    try {
    //Request destructurelize
        const controller = new ReceiverController()
        const { method } = req;

    //Database Logic
        switch (method){
            case 'GET':
                return controller.getReceiverbyID(req, res)
            case 'PATCH':
                return controller.updateReceiver(req, res)
            case 'DELETE':
                return controller.deleteReceiver(req, res)
        }
    }
    catch (err) {
        console.log(err);
        return serverError(res, { error: err });
    }
}