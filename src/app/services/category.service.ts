import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor() { }

  getCategories(): Observable<Category[]> {
    // For now, we'll return mock data
    return of([
      { id: 1, name: 'Electrónicos' },
      { id: 2, name: 'Ropa' },
      { id: 3, name: 'Hogar' },
      { id: 4, name: 'Deportes' },
      { id: 5, name: 'Juguetes' }
    ]);
    // In a real application, you would fetch this from an API
  }
}