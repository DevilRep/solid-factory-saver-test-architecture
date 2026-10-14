import { ArgumentsHost, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { Response } from "express";

export class CustomExceptionFilter implements ExceptionFilter {
    catch(exception: Error | HttpException, host: ArgumentsHost) {
        const context = host.switchToHttp()
        const response = context.getResponse<Response>()

        const exceptionStatus = 'getStatus' in exception ? exception.getStatus() : HttpStatus.BAD_REQUEST
        const message = 'message' in exception ? exception.message : 'Something went wrong.'

        response.status(exceptionStatus).json({
            statusCode: exceptionStatus,
            message
        })
    }
}