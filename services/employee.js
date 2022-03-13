const axios = require('axios')

class Employee {
  constructor() {
    this.url = 'http://localhost:3000'
  }

  async getEmployees() {
    return axios.get(`${this.url}/employees`)
      .then(response => response.data)
  }

  async getEmployessById(id) {
    console.log(id)
    return axios.get(`${this.url}/employees/${id}`)
      .then(response => response.data)
  }

  async createEmployee({
    employee
  }) {
    const employees = await this.getEmployees()
    employee.id = employees.length + 1

    return axios.post(`${this.url}/employees`, employee)
      .then(response => {
        console.log(response.data)
        return employee
      })
  }

  async updateEmployee({
    id,
    employee
  }) {
    return axios.put(`${this.url}/employees/${id}`, employee)
      .then(() => {
        employee.id = id
        return employee
      })
  }
}

module.exports = Employee