const
  Employee = require("../../services/employee")

const employee = new Employee()

const resolvers = {
  Query: {
    hello: () => 'Hello!',
    employees: async () => employee.getEmployees(),
    employee: async (root, args, context, info) => employee.getEmployessById(args.id)
  },
  Mutation: {
    createEmployee: (root, args, context, info) => employee.createEmployee(args),
    updateEmployee: (root, args, context, info) => employee.updateEmployee(args)
  }
}

module.exports = resolvers