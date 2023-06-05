import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const secretKey = "dummyKey";

export const signUp = (req: Request, res: Response) => {
  try {
    const { emailId, password } = req.body;
    console.log(req.body);

    const token = jwt.sign({ emailId, password }, secretKey, {
      expiresIn: "300s",
    });

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
      if (isValidToken(token)) {
        next();
      } else {
        res.send("token is not valid");
      }
    } else {
      res.send("token is not valid");
    }
  } catch (error) {
    console.log(error);
  }
};

export function isValidToken(token: string): boolean {
  let tokenIsValid: boolean = false;
  try {
    jwt.verify(token, secretKey, (err: any, authData: any) => {
      // console.log(token);
      // console.log(err);

      if (err) {
        // res.send({ result: "Invalid Token" });
        return false;
      } else {
        tokenIsValid = true;
      }
    });
  } catch (error) {
    console.log(error);
  }
  return tokenIsValid;
}

export const login = (req: any, res: Response) => {
  try {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
      const bearer = bearerHeader.split(" ");
      const token = bearer[1];
      req.token = token;

      if (isValidToken(token) === true) {
        res.send("Logged In");
      } else {
        res.send("Token Invalid");
      }
    } else {
      res.send("token is not valid");
    }
  } catch (error) {
    console.log(error);
  }
};
