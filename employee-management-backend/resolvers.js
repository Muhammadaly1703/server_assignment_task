const { Employee } = require('./models');

const resolvers = {
    Query: {
        listEmployees: async (_, { page = 1, pageSize = 10, sortBy = 'id' }) => {
            const offset = (page - 1) * pageSize;
            return Employee.findAll({
                limit: pageSize,
                offset: offset,
                order: [[sortBy, 'ASC']]
            });
        },
        getEmployee: async (_, { id }) => {
            return Employee.findByPk(id);
        }
    },
    Mutation: {
        addEmployee: async (_, { employeeInput }) => {
            return Employee.create(employeeInput);
        },
        updateEmployee: async (_, { id, employeeInput }) => {
            const employee = await Employee.findByPk(id);
            return employee.update(employeeInput);
        }
    }
};
module.exports = resolvers;
