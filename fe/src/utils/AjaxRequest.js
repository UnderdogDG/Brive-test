import SiteData from './SiteData';

class AjaxRequest{
  constructor(){
    this.site = new SiteData();
  }
  
  doRequest(url, options){
    return fetch(url, options).then( res => res.json() );
  }

  getEmployees(){
    let { url, method, header } = this.site.getEmployeesConfig();
    let options = { method, header };

    return this.doRequest(url, options);
  }

  saveEmployee(data){
    let { url, method, header } = this.site.saveEmployeeConfig();
    let raw = JSON.stringify({...data});
    let options = { method, header, body: raw };
    return this.doRequest(url, options);
  }

  updateEmployee(data){
    let { url, method, header } = this.site.updateEmployeeConfig();
    let raw = JSON.stringify({...data});
    console.log(raw);
    let options = { method, header, body: raw };
    return this.doRequest(url, options);
  }

  deleteEmployee(uuid){
    let { url, method, header } = this.site.deleteEmployeeConfig();
    let raw = JSON.stringify({ uuid });
    console.log(raw);
    let options = { method, header, body: raw };
    return this.doRequest(url, options);
  }


};

export default AjaxRequest;