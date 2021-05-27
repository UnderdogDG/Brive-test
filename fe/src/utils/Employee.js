import { v4 as UUID } from 'uuid';

class Employee{
  constructor(name='', lastName='', income=0, image='', uuid = null, company="Company"){
    this.uuid = uuid || UUID();
    this.name = name;
    this.lastName = lastName
    this.company = company;
    this.income = income;
    this.image = image;
  }
};

export default Employee;