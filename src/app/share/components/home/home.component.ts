import { Component, OnInit } from '@angular/core';
import { SpotifyAPIService } from 'src/app/services/spotify-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  error: boolean;
  errorMessage: string;
  countries: any[] = [];

  constructor(private spotifyApi: SpotifyAPIService) { }

  ngOnInit(): void {

    this.spotifyApi.getCountries().subscribe((data: any) => {
      console.log('Aquí estan los paises:', data);
      this.countries = data;
      for (const country of this.countries) {
        console.log(country.name);
        console.log(country.alpha2Code);
        console.log(country.flag);
      }
    }, (error) => {
      this.error = true;
      this.errorMessage = error.message;
      console.log('El error que se ha producido es:', error);
    });

    // this.spotifyApi.getNewReleases().subscribe((data: any) => {
    //   console.log('Aquí esta la data', data);
    //   // console.log('El nombre es:', data.results[0].name.first);
    //   // this.myUsers = data.results;
    //   // console.log('MyUsers:', this.myUsers);
    // }, (error) => {
    //   this.error = true;
    //   this.errorMessage = error.message;
    //   console.log('El error que se ha producido es:', error);
    // });
  }

}
