import dotenv from "dotenv";
dotenv.config();

const notFound = (req, res, next) => {
        const error = new Error(`Not found ${req.originalUrl}`);

        res.status(404);
        next(error);
};

const errorHanddler = (err, req, res, next) => {
        let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
        let message = err.message;

        if (err.name === "CastError" && err.kind === "objectId") {
                statusCode = 404;
                message = "Resource nottt found.";
        }
        res.status(statusCode).json({
                message,
                stack: process.env.NODE_ENV == "production" ? null : err.stack
        });
};

export {errorHanddler, notFound}