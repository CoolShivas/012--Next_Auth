import { login, register } from "@/app/controllers/authController";
import connectDB from "@/app/utils/database";
import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({
    message: "Getting the data from api's",
    success: true,
  });
}
// // // // Getting the Output on Thunder Client;

// // // // Registering the route;
export async function POST(request) {
  await connectDB(); // // Connecting the mongoDB to route i.e, api;
  try {
    const { searchParams } = new URL(request.url);
    // // // // Your URL route will be like (http://localhost:3000/api/auth?signup=true)
    if (searchParams.get("signup")) {
      return register(request); // // Registering the url request with the signup user's details schema such as name, email, and password;
    }
    // // // // Your URL route will be like (http://localhost:3000/api/auth?login=true)
    if (searchParams.get("login")) {
      return login(request); // // Registering the url request with the login user's details schema such as email, and password;
    }
    console.log("Search Params => ", searchParams);
    return NextResponse.json({ message: "Testing the Api's", success: true });
  } catch (error) {
    console.log(error.message);
  }
}
// // // // Getting the Output on Thunder Client;

// // // // POST /api/auth?signup=true 200 in 5576ms
