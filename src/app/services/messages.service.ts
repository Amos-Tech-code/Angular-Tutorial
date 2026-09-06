import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {LatestPrices, OrderBook, Student} from "../interfaces/data.interface";
import {Post} from "../interfaces/post.interface";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private apiUrl: string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  getMessages() {
    return ['Message 1', 'Message 2', 'Message 3'];
  }

  getPosts() : Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  getLanguages() : Observable<Array<string>> {
    return this.http.get<Array<string>>('http://localhost:1111/languages');
  }

  getStudent() : Observable<Student> {
    return this.http.get<Student>('http://localhost:1111/students');
  }

  getBookOrders() : Observable<OrderBook> {
    return this.http.get<OrderBook>('http://localhost:1111/orderbook');
  }

  getLatestPrices() : Observable<LatestPrices> {
    return this.http.get<LatestPrices>('http://localhost:1111/latestPrices');
  }

}
