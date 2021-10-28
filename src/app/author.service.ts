import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  getAuthors(){
    return ["Tolkein", "Rowling", "Murakami", "Burroughs", "Palahniuk"];
  }
}


// @name is decorator in angular 
