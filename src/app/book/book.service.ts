import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './book-data';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBooks(){
  return BOOKS;
  }
}
