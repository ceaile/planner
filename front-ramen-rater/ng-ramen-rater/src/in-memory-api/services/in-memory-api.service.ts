import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { RAMEN_DATA } from '../ramen-data';
import { RAMEN_DATA_TEST } from '../ramen_data_test';

/**
 * Intercepts HTTP requests to mock API usage
 */
@Injectable({
  providedIn: 'root'
})
export class InMemoryApiService implements InMemoryDbService {

  createDb() {
    //const ramen_db = RAMEN_DATA;
    //const ramen_db = RAMEN_DATA_TEST
    const ramen = [
      { id: 1, brand: 'Nissin', variety: 'Spicy Chicken', style: 'Cup', country: 'Japan', stars: 4.5 },
      { id: 2, brand: 'Samyang', variety: 'Hot Chicken', style: 'Pack', country: 'South Korea', stars: 5.0 },
      // Más datos aquí...
    ];

    return { ramen };
  }
}
