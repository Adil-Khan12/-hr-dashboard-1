export interface Employee {
    id: number;
    name: string;
    role: string;
    department: string;
    status: 'active' | 'inactive' | 'on leave';
    email: string;
    joining_date: string;
    salary: number;
    manager: string;
    location: string;
  }
export interface Activity {
    message: string;
  }
  
  export interface Leave {
    id: number;
    employeeId: number;
    from: string;
    to: string;
    status: string;
  }
  
  export interface DashboardSummaryItem {
    id: number;
    title: string;
    value: number;
  }
  
  export interface DashboardContent {
    summary: DashboardSummaryItem[];
    employee_list: Employee[];
    activities: Activity[];
  }
  
  export interface CompanyData {
    employees: Employee[];
    leaves: Leave[];
    dashboardContent: DashboardContent;
  }
