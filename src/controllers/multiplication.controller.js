import multiplicationBusinessService from "../services/multiplication.business.js";
import catchAsyncError from "../middlewares/catch-async-error.middleware.js";
import { HttpError, HttpErrors } from "../utils/application-errors.js";
import logger from "../configs/logger.config.js";

const multiplication = catchAsyncError(async (req, res) => {
    logger.info(`multiplicationController.multiplication called with body %o`, req.body);

    const { number1, number2 } = req.body;
    if (number1 === undefined || number2 === undefined) {
        throw new HttpError(400, HttpErrors.BAD_REQUEST, "number1 and number2 are required");
    }

    const result = await multiplicationBusinessService.multiplication(number1, number2);

    logger.info(`multiplicationController.multiplication response is %o`, result);

    res.status(200).json({ result });
});

export default {
    multiplication,
};
