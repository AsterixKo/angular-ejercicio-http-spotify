import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyAPIService } from 'src/app/services/spotify-api.service';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.css']
})
export class NewReleasesComponent implements OnInit {

  albums: any;
  code: string;
  error: boolean = false;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private serviceSpotify: SpotifyAPIService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log('El code es:', params['code']);
      this.code = params['code'].toLowerCase();
    });

    this.serviceSpotify.getNewReleases(this.code).subscribe((data: any) => {
      console.log('Aquí estan los new-releases:', data);
      this.albums = data.albums.items;
      for (const itemAlbum of this.albums) {
        console.log('Album name:',itemAlbum.name);
        // for (const image of itemAlbum.images) {
        //   console.log('image.url:', image.url);
        // }
        for (const artist of itemAlbum.artists) {
          console.log('artist:', artist.name);
        }
      }
    }, (error) => {
      this.error = true;
      this.errorMessage = error.message;
      console.log('El error que se ha producido es:', error);
    });
  }

}
