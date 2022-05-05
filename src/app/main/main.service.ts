import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private http: HttpClient
  ) { }

    // Get Random Joke
    getRandomJoke() {
      return this.http.get('https://api.chucknorris.io/jokes/random')
    }


    // Get All Categories
    getAllCategories() {
      return this.http.get('https://api.chucknorris.io/jokes/categories')
    }

    // Get Random Joke From A Given Category
    getJokeFromCategory(category: string) {
      return this.http.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
    }

    // Get Search Jokes
    getSearchJokes(searchTerm: string) {
      return this.http.get(`https://api.chucknorris.io/jokes/search?query=${searchTerm}`)
    }
}
