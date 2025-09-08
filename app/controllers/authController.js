import { NextResponse } from "next/server";

// // // // Register the User;
export const register = async (request) => {
  const { name, email, password } = await request.json();
  console.log("Name => ", name, "EmaiID => ", email, "PassWord => ", password);

  return NextResponse.json({
    message: "Getting the data from the Body",
    name: name,
    email: email,
    password: password,
  });
};
// // // // Name =>  shiva EmaiID =>  shiva@gmail.com PassWord =>  123
