module.exports = {
    success: (res, data, message) => {
        return res.status(200).json({
            message: message || "success!",
            data: data,
            code: 200
        });
    },
    notFound: (res, message) => {
        return res.status(404).json({
            message: message || "The infomation you requested was not found!",
            code: 404
        });
    },
    badRequest: (res, message) => {
        return res.status(400).json({
            message: message || "Invalid Request!",
            code: 400
        });
    },
    unauthorized: (res, message) => {
        return res.status(401).json({
            message: message || "You do not have access!",
            code: 401
        });
    },
    forbidden: (res, message) => {
        return res.status(403).json({
            message: message || "You do not have access!",
            code: 403
        });
    },
    methodNotAllowed: (res, message) => {
        return res.status(405).json({
            message: message || "Method is not allowed!",
            code: 405
        });
    },
    notAcceptable: (res, message) => {
        return res.status(406).json({
            message: message || "Request is not acceptable!",
            code: 406
        });
    },
    conflict: (res, message) => {
        return res.status(409).json({
            message: message || "Request conflicts!",
            code: 409
        });
    },
    unprocessableEntity: (res, message) => {
        return res.status(422).json({
            message: message || "Request has semantic errors!",
            code: 422
        });
    },
    tooManyRequests: (res, message) => {
        return res.status(429).json({
            message: message || "Too many requests",
            code: 429
        });
    },
    serverError: (res, message) => {
        return res.status(500).json({
            message: message || "Server error!",
            code: 500
        });
    },
    serviceUnavailable: (res, message) => {
        return res.status(503).json({
            message: message || "Service is unavailable!",
            code: 503
        });
    },
    gatewayTimeout: (res, message) => {
        return res.status(504).json({
            message: message || "Timeout!",
            code: 504
        });
    },
    custom: (res, code, message) => {
        return res.status(code).json({
            message: message,
            code: code
        });
    }
}