import { Component, OnInit } from '@angular/core';
import { SpotifyAPIService } from 'src/app/services/spotify-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private spotifyApi: SpotifyAPIService) { }

  ngOnInit(): void {
    this.spotifyApi.login();
  }

}
