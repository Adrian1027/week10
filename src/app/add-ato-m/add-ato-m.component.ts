import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-ato-m',
  templateUrl: './add-ato-m.component.html',
  styleUrls: ['./add-ato-m.component.css']
})
export class AddAtoMComponent implements OnInit {

  constructor(private dbService: DatabaseService, private router: Router) { }
  ngOnInit(): void {
    this.onGetActors();
    this.onGetMovies();
  }
  
  actorsDB: any[] = [];
  actorselected:string="";
  movieselected:string="";
  moviesDB: any[] = [];


  onSelectMovie(item){
    this.movieselected=item._id;}
    onSelectActor(item){
      this.actorselected=item._id;
  
    };
    onGetMovies() {
      this.dbService.getMovies().subscribe((data: any[]) => {
        this.moviesDB = data;
      });
    }
    onGetActors() {
  
       this.dbService.getActors().subscribe((data: any[]) => {
        this.actorsDB = data;
      });
    }
  
  onAddActor(movieID,actorID){
    this.dbService.AddActorMovie(movieID,actorID).subscribe(result =>{
      this.onGetMovies();
      this.router.navigate(["/listmovie"]);
    });
    
    this.dbService.AddMovieActor(actorID,movieID).subscribe(result =>{
      this.onGetActors();
      this.router.navigate(["/listactors"]);;
    });

   

  }};
