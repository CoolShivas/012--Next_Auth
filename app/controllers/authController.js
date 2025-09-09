import { NextResponse } from "next/server";
import User from "../Models/User";
import bcrypt from "bcryptjs";

// // // // // Register the User to save the data on database;
export const register = async (request) => {
  const { name, email, password } = await request.json();
  // console.log("Name => ", name, "EmaiID => ", email, "PassWord => ", password);

  // return NextResponse.json({
  //   message: "Getting the data from the Body",
  //   name: name,
  //   email: email,
  //   password: password,
  // });
  // // // // // Sign-Up page functionality with unique account only;
  try {
    let user = await User.findOne({ email });

    if (user) {
      return NextResponse.json({
        message: "User already exists !",
        success: false,
      });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);

      user = await User.create({ name, email, password: hashedPassword });

      return NextResponse.json({
        message: "User Register Successfully...!",
        user,
        success: true,
      });
    }
  } catch (error) {
    return NextResponse.json({ message: "Server Error", error: error.message });
  }
};
// // // // Name =>  shiva EmaiID =>  shiva@gmail.com PassWord =>  123
// // // // Open the Thunder Client the make a POST request enter url(http://localhost:3000/api/auth?signup=true)
// // // // Make a body such as
/**
 * {
  "name":"shiva",
  "email":"shiv@gmail.com",
  "password":"123"
}
 * 
 */
// // // // Then hit the send button you will get the response as
// // // // Status: 200 OK    Size: 301 Bytes     Time: 293 ms
/**
 * 
 * {
  "message": "User Register Successfully...!",
  "user": {
    "name": "shiva",
    "email": "shiv@gmail.com",
    "password": "$2b$10$fODMGs9euNk68fXvNG5fMurs/1EKMQDc1zMSPDF0FJIyXTItbrvmO",
    "_id": "68bfd02e37da4fa754238488",
    "createdAt": "2025-09-09T06:58:54.557Z",
    "updatedAt": "2025-09-09T06:58:54.557Z",
    "__v": 0
  },
  "success": true
}
 * 
 */
// // // // Then hit the send button again you will get the response as
/**
 * {
  "message": "User already exists !",
  "success": false
}
 * 
 */
