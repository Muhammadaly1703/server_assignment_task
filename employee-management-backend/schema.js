// schema.js
const { gql } = require('apollo-server');

const typeDefs = gql`
    # Define Employee type
    type Employee {
        id: ID!              # Unique identifier
        name: String!        # Employee's name (non-nullable)
        age: Int             # Employee's age
        class: String        # Class or department of the employee
        subjects: [String]   # Array of subjects the employee handles
        attendance: [Attendance] # Attendance history, which is another custom type
    }

    # Define custom Attendance type
    type Attendance {
        date: String!    # Date of attendance
        status: String!  # Status, e.g., 'Present', 'Absent'
    }

    # Define input types for adding and updating employees
    input EmployeeInput {
        name: String!        # Required name
        age: Int             # Optional age
        class: String        # Optional class/department
        subjects: [String]   # Optional subjects array
        attendance: [AttendanceInput] # Optional attendance array
    }

    # Input type for Attendance data
    input AttendanceInput {
        date: String!    # Required date
        status: String!  # Required status
    }

    # Define queries for fetching employee data
    type Query {
        # Fetch list of employees, with optional pagination and sorting
        listEmployees(page: Int, pageSize: Int, sortBy: String): [Employee]
        
        # Fetch a specific employee by ID
        getEmployee(id: ID!): Employee
    }

    # Define mutations for adding and updating employee data
    type Mutation {
        # Add a new employee with the given input data
        addEmployee(employeeInput: EmployeeInput): Employee
        
        # Update an existing employee with the given input data
        updateEmployee(id: ID!, employeeInput: EmployeeInput): Employee
    }
`;

module.exports = typeDefs;
