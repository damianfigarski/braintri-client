import { Employee } from "./employee";

export class Position {
    id: number;
    positionName: string;
    employeeList: Array<Employee>;
}