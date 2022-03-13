const schemas = `
  type Query {
    hello: String
    employees: [Employee]
    employee (id: ID): Employee
  }

  type Mutation {
    createEmployee (employee: InputEmployee): Employee
    updateEmployee (id: ID, employee: InputEmployee): Employee 
  }

  input InputEmployee {
    name: String
    active: Boolean
    role: Int
  }

  type Employee {
    id: ID
    name: String
    active: Boolean
    role: Int
  }
`

module.exports = schemas