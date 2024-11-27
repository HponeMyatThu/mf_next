import { NextRequest, NextResponse } from "next/server";
import { handleApiRequest, handleImageRequest } from "./config/middleware";

export default async function middlware(req: NextRequest) {
  if (true) {
    handleImageRequest(req);
    handleApiRequest(req);
  }
  
  return NextResponse.next();
}
