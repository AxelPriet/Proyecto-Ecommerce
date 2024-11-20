import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://api.example.com/products'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    // For now, we'll return mock data
    return of([
      { id: 1, name: 'Producto 1', description: 'Descripción 1', price: 100, imageUrl: 'https://via.placeholder.com/150', category: 'Electrónicos' },
      { id: 2, name: 'Producto 2', description: 'Descripción 2', price: 200, imageUrl: 'https://via.placeholder.com/150', category: 'Ropa' },
      { id: 3, name: 'Producto 3', description: 'Descripción 3', price: 300, imageUrl: 'https://via.placeholder.com/150', category: 'Hogar' },
    ]);
    // In a real application, you would use:
    // return this.http.get<Product[]>(this.apiUrl);
  }

  getProduct(id: number): Observable<Product> {
    // For now, we'll return mock data
    return of({ id: id, name: `Producto ${id}`, description: `Descripción ${id}`, price: 100 * id, imageUrl: 'https://via.placeholder.com/150', category: 'Electrónicos' });
    // In a real application, you would use:
    // return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  searchProducts(term: string): Observable<Product[]> {
    // For now, we'll return mock data
    return of([
      { id: 1, name: 'Resultado 1', description: 'Descripción 1', price: 100, imageUrl: 'https://via.placeholder.com/150', category: 'Electrónicos' },
      { id: 2, name: 'Resultado 2', description: 'Descripción 2', price: 200, imageUrl: 'https://via.placeholder.com/150', category: 'Ropa' },
    ]);
    // In a real application, you would use:
    // return this.http.get<Product[]>(`${this.apiUrl}/search?q=${term}`);
  }
}