import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const members = [
      { id: 1, fullName: 'Ms. Nice', zipCode: '84223', errorMessage: "OK", isSuccess: true },
      { id: 2, fullName: 'John Smart', zipCode: '89223', errorMessage: "OK", isSuccess: true }
    ];

    const products = [
      { id: 100, price: 100, name: 'Reqular Montly' },
      { id: 101, price: 150, name: 'Silver Montly' },
      { id: 103, price: 150, name: 'Gold Montly' }
    ];
    return { members, products };
  }
}
