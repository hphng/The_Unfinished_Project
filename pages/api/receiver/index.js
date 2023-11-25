import ReceiverController from '../../../utils/apiController/receiverController';

export default async function requestHandler(req, res){
    try {
    //Request destructurelize
        const controller = new ReceiverController()
        const { method } = req;

    //Database Logic
        switch (method){
            case 'GET':
                return controller.getAllReceiver(req, res)
            case 'POST':
                return controller.createReceiver(req, res)
        }
    }
    catch (err) {
        console.log(err);
        return serverError(res, { error: err });
    }
}