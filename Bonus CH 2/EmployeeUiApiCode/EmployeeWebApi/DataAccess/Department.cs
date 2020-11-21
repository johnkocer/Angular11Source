using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SmartIT.Employee.MockDB
{
    public class Department:IBaseEntity
    {
        public Department()
        {
            Employee = new HashSet<Employee>();
        }

        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }
        public string Head { get; set; }

        public ICollection<Employee> Employee { get; set; }
    }
}
