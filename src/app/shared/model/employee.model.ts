import { Status } from "../enums/status.enum";

export interface Employee {
  id: number;
  name: string;
  email: string;
  role: string;
  department: string;
  manager: string;
  location: string;
  joining_date: string;
  salary: number;
  status: Status;
}

