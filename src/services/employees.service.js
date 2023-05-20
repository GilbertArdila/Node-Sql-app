const boom = require('@hapi/boom');

//this models was created by default in libs/sequelize
const { models } = require('../libs/sequelize');

class EmployeesService {
  constructor() {}

async create(data){
  const newEmployee = await models.Employee.create(data);
  return newEmployee;
}

async find(){
  const employees = await models.Employee.findAll();
  return employees;
}

async findOne(id){
  const employee = await models.Employee.findByPk(id);
  if(!employee){
    throw boom.notFound('Empleado no existe');
  }else{
    return employee;
  }
}

async update(id,data){
  const employee = await this.findOne(id);
  if(employee){
    const rta = await employee.update(data);
    return rta;
  }
  }

  async delete(id){
    const employee = await this.findOne(id);
  if(employee){
    await employee.destroy(id);
    return id;
  }
}


}
module.exports = EmployeesService;
