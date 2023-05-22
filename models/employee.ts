import mongoose, { Schema, Document } from "mongoose";

export interface IEmployee extends Document {
  name: string;
  role: string;
  EmailId: string;
  salary: number;
  yearOfExperience: number;
  martialStatus: string;
}

const employeeSchema: Schema = new Schema({
  name: String,
  role: String,
  EmailId: String,
  salary: Number,
  yearOfExperience: Number,
  martialStatus: String,
});

export default mongoose.model<IEmployee>("employee", employeeSchema);
