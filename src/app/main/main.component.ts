import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  categories: any[] = []
  Jokes: any[] = []

  constructor(
    private DataService: MainService
  ) { }


  ngOnInit(): void {
    this.getCategory();
  }


  // Get All Categories 
  getCategory() {
    this.DataService.getAllCategories()
    .subscribe((categories : any) => {
      this.categories = categories
      console.log(this.categories);
      
    })
  }


  // Get Random Joke
  getRandomJoke() {
    this.DataService.getRandomJoke()
    .subscribe((joke: any) => {
      this.Jokes.push(joke)
      console.log(this.Jokes);
      
    })
  }

  // Clear Jokes List
  clearJokesList() {
    this.Jokes = []
  }

  // Get Joke By Category
  getJokeByCategory(category: string) {
    this.DataService.getJokeFromCategory(category)
    .subscribe(joke => {
      this.Jokes = []
      this.Jokes.push(joke)
    })
  }

  // Get Jokes From Search
  getSearchJokes(searchTerm: string) {
    if(searchTerm !== '') {
    this.DataService.getSearchJokes(searchTerm)
    .subscribe((jokes: any) => {
      this.Jokes = jokes.result
    })}
  }
}
