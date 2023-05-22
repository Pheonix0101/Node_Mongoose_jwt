import "../config/database_connection";
import { Request, Response } from "express";
import Employee from "../models/employee";

export const create = async (req: Request, res: Response) => {
  try {
    const data = new Employee(req.body);
    const result = await data.save();
    res.send({
      Status: {
        StatusCode: 200,
        StatusType: "Success",
        StatusSeverity: "Information",
      },
      result,
    });
    console.log(result);
  } catch (error) {
    res.status(500).json({
      status: { statusCode: 500, statusType: "failure", error: error },
    });
  }
};

export const get = async (req: Request, res: Response) => {
  try {
    const result = await Employee.find({});
    res.send({
      Status: {
        StatusCode: 200,
        StatusType: "Success",
        StatusSeverity: "Information",
      },
      result,
    });
  } catch (error) {
    res.status(500).json({
      status: { statusCode: 500, statusType: "failure", error: error },
    });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const result = await Employee.deleteOne(req.params);
    res.send({
      Status: {
        StatusCode: 200,
        StatusType: "Success",
        StatusSeverity: "Information",
      },
      result,
    });
  } catch (error) {
    res.status(500).json({
      status: { statusCode: 500, statusType: "failure", error: error },
    });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const result = await Employee.updateOne(req.params, {
      $set: req.body,
    });
    res.send({
      Status: {
        StatusCode: 200,
        StatusType: "Success",
        StatusSeverity: "Information",
      },
      result,
    });
  } catch (error) {
    res.status(500).json({
      status: { statusCode: 500, statusType: "failure", error: error },
    });
  }
};

export const pagination = async (req: Request, res: Response) => {
  try {
    let page = Number(req.params.page) || 1;
    const limitPerPage = 3;
    const pagination = (page - 1) * limitPerPage;
    const result = await Employee.find().skip(pagination).limit(limitPerPage);
    res.send({
      Status: {
        StatusCode: 200,
        StatusType: "Success",
        StatusSeverity: "Information",
      },
      result,
    });
  } catch (error) {
    res.status(500).json({
      status: { statusCode: 500, statusType: "failure", error: error },
    });
  }
};
