export const successResponse = (res, message, data = null) => {

    return res.status(200).json({
        success: true,
        message,
        data
    });

};

export const errorResponse = (res, message) => {

    return res.status(500).json({
        success: false,
        message
    });

};