import { MX } from './Fix';

class State{
  constructor(){
    this.employees = [];
    this.company = 'Company';
    this.fix = MX;
    this.filteredEmployees = [];
    this.filterWord = '';
    this.totalEmployees = 0;
  }

  setEmployees(employees){
    this.employees = Object.values(employees);
    this.setTotalEmployees();
    this.filterEmployees(this.filterWord);
    return this.updateState();
  }

  setTotalEmployees(){
    this.totalEmployees = this.employees.length;
  }

  setFix(fix){
    this.fix = fix;
    return this.updateState();
  }

  filterEmployees(str){
    console.log("filter state...")
    this.filterWord = str;
    if(str.length > 0){
      this.filteredEmployees = this.employees.filter( 
        employee =>{
          return employee.name.toLowerCase().includes(str) || employee.company.toLowerCase().includes(str) || employee.lastName.toLowerCase().includes(str)
        }
      );

    }
    else{
      this.filteredEmployees = this.employees
    }
    console.log(this.filteredEmployees);
    return this.updateState();
  }

  updateState(){
    let state = {...this};
    Object.setPrototypeOf(state, State.prototype);
    return state;
  }

}

export default State;