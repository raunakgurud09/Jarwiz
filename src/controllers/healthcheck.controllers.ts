import { ApiResponse } from "../utils/ApiResponse";
import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const healthcheck = asyncHandler(async (req: Request, res: Response) => {
  const cors = process.env.CORS_ORIGIN
  return res
    .status(200)
    .json(new ApiResponse(200, "OK", `${cors} Health check passed`,));
});

export { healthcheck };
