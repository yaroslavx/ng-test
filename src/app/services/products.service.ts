import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { catchError, delay, Observable, retry, tap, throwError } from 'rxjs';
import { Product } from '../models/product';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  products: Product[] = [];

  getAll(): Observable<Product[]> {
    return this.http
      .get<Product[]>('https://fakestoreapi.com/products', {
        params: new HttpParams({
          fromObject: { limit: 30 },
        }),
      })
      .pipe(
        delay(1),
        retry(2),
        tap((products) => (this.products = products)),
        catchError(this.errorHandler.bind(this))
      );
  }

  create(product: Product): Observable<Product> {
    return this.http
      .post<Product>('https://fakestoreapi.com/products', product)
      .pipe(tap((product) => this.products.push(product)));
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
