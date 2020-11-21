import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const employees = [
      { id: 10, name: 'Ms. Nice', gender:'Male', salary:10000, departmentId:1 },
      { id: 11, name: 'Mr. Nice', gender:'Female', salary:5000, departmentId:1 },
      { id: 12, name: 'Narco' , gender:'Male', salary:8000, departmentId:1 },
      { id: 13, name: 'Bombasto' , gender:'Male', salary:9000, departmentId:1 },
      { id: 14, name: 'Celeritas' , gender:'Male', salary:10000, departmentId:1 }
    ];
    return {employees};
  }
}
