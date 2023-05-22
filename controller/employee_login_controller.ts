import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const secretKey = "dummyKey";

export const signUp = (req: Request, res: Response) => {
  try {
    const { emailId, password } = req.body;
    console.log(req.body);

    const token = jwt.sign({ emailId, password }, secretKey, {
      expiresIn: "900s",
    });
    console.log(token);
    res.send(token);
  } catch (error) {
    console.log(error);
  }
};

export const verifyToken = (req: any, res: Response, next: NextFunction) => {
  try {
    const bearerHeader = req.headers["authorization"];
    // console.log(bearerHeader)
    if (typeof bearerHeader !== "undefined") {
      const bearer = bearerHeader.split(" ");
      const token = bearer[1];
      req.token = token;
      next();
    } else {
      res.send("token is not valid");
    }
  } catch (error) {
    console.log(error);
  }
};

export const login = (req: any, res: Response) => {
  jwt.verify(req.token, secretKey, (err: any, authData: any) => {
    if (err) {
      res.send({ result: "Invalid Token" });
    } else {
      res.send(authData);
    }
  });
};
