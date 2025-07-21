import { Status } from "../enums/status.enum";

export interface Employee {
  id: number;
  name: string;
  email: string;
  role: string;
  department: string;
  manager: string;
  location: string;
  joining_date: string; // or Date, if you choose to use Date objects
  salary: number;
  status: Status;
}

