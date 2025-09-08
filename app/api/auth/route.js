import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({
    message: "Getting the data from api's",
    success: true,
  });
}
// // // // Getting the Output on Thunder Client;
