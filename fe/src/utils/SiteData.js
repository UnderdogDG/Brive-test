import EndPoints from './EndPoints'

class SiteData{
  constructor(){
    this.siteURL = 'http://localhost:5000';
    this.endPoints = EndPoints;
  }

  getHeader(){
    let headers = new Headers();
    headers.append( "Content-Type", "application/json; charset=UTF-8" );
    return headers;
  }

  getEmployeesConfig(){
    let url = this.siteURL + this.endPoints.LOAD_EMPLOYEES.URI
    let header = this.getHeader();
    let method = this.endPoints.LOAD_EMPLOYEES.METHOD
    return { url, header, method };
  }

  saveEmployeeConfig(){
    let url = this.siteURL + this.endPoints.SAVE_EMPLOYEE.URI
    let header = this.getHeader();
    let method = this.endPoints.SAVE_EMPLOYEE.METHOD
    return { url, header, method }
  }

  updateEmployeeConfig(){
    let url = this.siteURL + this.endPoints.UPDATE_EMPLOYEE.URI
    let header = this.getHeader();
    let method = this.endPoints.UPDATE_EMPLOYEE.METHOD
    return { url, header, method }
  }
  
  deleteEmployeeConfig(){
    let url = this.siteURL + this.endPoints.DELETE_EMPLOYEE.URI
    let header = this.getHeader();
    let method = this.endPoints.DELETE_EMPLOYEE.METHOD
    return { url, header, method }
  }
};

export default SiteData;