const { methodNotAllowed, success, serverError} = require("../../../helpers/mockResponse");

export default async function handler(req, res) {
    try {
        switch (req.method) {
            case 'POST':
                return success(res, {message: 'POST METHOD'});
            default:
                return methodNotAllowed(res, { message: 'Method Not Allowed' });
        }
    } catch (error) {
        console.log(error);
        return serverError(res, { error: error.message });
    }
}