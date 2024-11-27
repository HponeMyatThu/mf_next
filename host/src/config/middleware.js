import { NextResponse } from "next/server";

async function handleImageRequest(req) {
  if (req) {
    return NextResponse.next();
  }
}

async function handleApiRequest(req) {
  if (req) {
    return NextResponse.next();
  }
}

export { handleImageRequest, handleApiRequest };
