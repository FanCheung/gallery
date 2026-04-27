import {
  type ArgumentsHost,
  Catch,
  type ExceptionFilter,
  NotFoundException,
} from "@nestjs/common";
import { type Request, type Response } from "express";

@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter {
  catch(_exception: NotFoundException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();
    res.status(404).json({ error: "not_found", path: req.path });
  }
}
