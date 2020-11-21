using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using SmartIT.Employee.MockDB;

namespace EmployeeWebApi.Controllers
{
  //[EnableCors("AllowAllHeaders")]
  [Produces("application/json")]
  [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly EmployeeRepository _employeeService;

        public EmployeeController()
        {
            _employeeService = new EmployeeRepository();
        }

        [Route("~/api/GetAllEmployees")]
        [Route("~/api/GetEmployees")]
        [HttpGet]
        public async Task<ICollection<Employee>> GetAllEmployees()
        {
            return await _employeeService.GetAllAsync();
        }

        [Route("~/api/GetEmployee/{id}")]
        [HttpGet]
        public Employee GetEmployee(int id)
        {
            return  _employeeService.FindbyId(id);
        }

        [Route("~/api/GetEmployeeByName/{name}")]
        [HttpGet]
        public ICollection<Employee> GetEmployeeByName(string name)
        {
            return _employeeService.FindbyName(name);
        }

        [Route("~/api/AddEmployee")]
        [HttpPost]
        public async Task<Employee> AddEmployee([FromBody]Employee item)
        {
            return await _employeeService.AddAsync(item);
        }

        [Route("~/api/UpdateEmployee/{id}")]
        [Route("~/api/UpdateEmployee")]
        [HttpPut]
        public async Task<Employee> UpdateEmployee([FromBody]Employee item)
        {
            return await _employeeService.UpdateAsync(item);
        }

        [Route("~/api/DeleteEmployee/{id}")]
        [HttpDelete]
        public async Task DeleteEmployee(int id)
        {
            var findEmployee = _employeeService.FindbyId(id);
            if (findEmployee != null)
                await _employeeService.DeleteAsync(findEmployee);
        }
    }
}