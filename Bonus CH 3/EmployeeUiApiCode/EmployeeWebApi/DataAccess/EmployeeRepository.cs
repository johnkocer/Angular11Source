//Do not use in production, training, test and demo only
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;

namespace SmartIT.Employee.MockDB
{
    public interface IBaseEntity
    {
        [Key]
        int Id { get; set; }
    }

    public class BaseRepository<T> where T : class
    {
        protected static List<T> _items = new List<T>();

        public  ICollection<T> GetAll()
        {
            return  Items;
        }

        public async Task<ICollection<T>> GetAllAsync()
        {
            return await Task.Run(() => Items);
        }
        public List<T> Items { get { return _items; } }

        public T Add(IBaseEntity t)
        {
            t.Id = _items.Count + 1;
            _items.Add(t as T);
            return (T)t;
        }

        public async Task<T> AddAsync(IBaseEntity t)
        {
            t.Id = _items.Count + 1;
            await Task.Run(() =>_items.Add(t as T));
            return (T)t;
        }

        public void Delete(IBaseEntity t)
        {
            _items.Remove(t as T);
        }

        public async Task<int> DeleteAsync(IBaseEntity t)
        {
           await Task.Run(() =>_items.Remove(t as T));
            return 1;
        }

        public void DeleteAll()
        {
            _items = new List<T>();
        }

        public int Count
        {
            get { return _items.Count; }
        }


    }
    public class EmployeeRepository : BaseRepository<Employee>
    {
        static EmployeeRepository()
        {

            _items.Add(new Employee() { Id = 1, DepartmentId = 1, Gender = "Male", Name = "Mike", Salary = 8000 });
            _items.Add(new Employee() { Id = 2, DepartmentId = 1, Gender = "Male", Name = "Adam", Salary = 5000 });
            _items.Add(new Employee() { Id = 3, DepartmentId = 1, Gender = "Female", Name = "Jacky", Salary = 9000 });
        }
        public Employee Update(Employee item)
        {
            var findEmployee = _items.Find(e => e.Id == item.Id);
            if (findEmployee != null)
            {
                findEmployee.Name = item.Name;
                findEmployee.Gender = item.Gender;
                findEmployee.Salary = item.Salary;

                return findEmployee;
            }

            return null;
        }

        public async Task<Employee> UpdateAsync(Employee item)
        {
            var findEmployee = await Task.Run(()=>_items.Find(e => e.Id == item.Id));
            if (findEmployee != null)
            {
                findEmployee.Name = item.Name;
                findEmployee.Gender = item.Gender;
                findEmployee.Salary = item.Salary;

                return findEmployee;
            }

            return null;
        }

        public Employee FindbyId(int id)
        {
            var findEmployee = _items.Find(e => e.Id == id);
            if (findEmployee != null)
            {
               return findEmployee;
            }
            return null;
        }

        public async Task<Employee> FindbyIdAsync(int id)
        {
            var findEmployee =await Task.Run(()=> _items.Find(e => e.Id == id));
            if (findEmployee != null)
                return findEmployee;
            return null;
        }

        public ICollection<Employee> FindbyName(string name)
        {
            var findEmployee = _items.Find(e => e.Name.Contains(name, StringComparison.OrdinalIgnoreCase));
            if (findEmployee != null)
            {
                var list = new List<Employee>();
                list.Add(findEmployee);
                return list;
            }
            return null;
        }

        public async Task<Employee> FindbyNameAsync(string name)
        {
            var findEmployee = await Task.Run(()=> _items.Find(e => e.Name.Contains(name, StringComparison.OrdinalIgnoreCase)));
            if (findEmployee != null)
                return findEmployee;
            return null;
        }
    }

    public class DepartmentRepository : BaseRepository<Department>
    {
        static DepartmentRepository()
        {
            _items.Add(new Department() { Id = 1, Name = "IT", Head = "Rick", Location = "Phoenix" });
            _items.Add(new Department() { Id = 2, Name = "HR", Head = "Jen", Location = "New York" });
            _items.Add(new Department() { Id = 3, Name = "RND", Head = "Sam", Location = "Los Angeles" });
        }
        public void Update(Department item)
        {
            var findDepartment = _items.Find(e => e.Id == item.Id);
            if (findDepartment != null)
            {
                findDepartment.Name = item.Name;
                findDepartment.Location = item.Location;
                findDepartment.Head = item.Head;
            }
        }

        public async Task<Department> UpdateAsync(Department item)
        {
            var findDepartment =await Task.Run(()=> _items.Find(e => e.Id == item.Id));
            if (findDepartment != null)
            {
                findDepartment.Name = item.Name;
                findDepartment.Location = item.Location;
                findDepartment.Head = item.Head;
            }
            return findDepartment;
        }
    }

    public class TodoRepository : BaseRepository<Todo>
    {
        static TodoRepository()
        {
            _items.Add(new Todo() { Id=1, Name = "Check eMails" });
            _items.Add(new Todo() { Id = 2, Name = "Do dishes" });
            _items.Add(new Todo() { Id = 3, Name = "Call Boss" });
        }


        public Todo Update(Todo item)
        {
            var findTodo =  _items.Find(e => e.Id == item.Id);
            if (findTodo != null)
            {
                findTodo.Name = item.Name;
                return findTodo;
            }

            return null;
        }

        public async Task<Todo> UpdateAsync(Todo item)
        {
            var findTodo = await Task.Run(()=>_items.Find(e => e.Id == item.Id));
            if (findTodo != null)
            {
                findTodo.Name = item.Name;
                return findTodo;
            }

            return null;
        }
       
    }
}
