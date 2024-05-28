import {Request, Response, NextFunction} from "express";

// you must mount the errorHandler middleware function after you have mounted all the controller functions of your application.
export const logsMiddle = (request: Request, _response: Response, next: NextFunction) => {
  console.log("--------------logs middleware-------------------");
  
  //api/persons/5
  console.log("x-original-for:  " +request.headers['x-original-uri']);
  //ip
  console.log("x-forwarded-for: " + request.headers['x-forwarded-for']);
  console.log("x-real-ip:       " + request.headers['x-real-ip']);
 

  // const ip = request.headers["x-forwarded-for"];
  //const seccontext = request.headers["seccontext"];
  //console.log(`seccontext ${seccontext}`);
  console.log("---------------------------------");

  next();
};
