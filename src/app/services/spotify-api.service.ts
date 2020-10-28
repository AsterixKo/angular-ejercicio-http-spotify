import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
// import { Http, RequestOptions, Headers } from '@angular/http';
import { Apikey } from 'src/apikey';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyAPIService {
  client_id = Apikey.client_id;
  client_secret = Apikey.client_secret;

  private accessToken: any;
  private tokenType: string;
  // curl -X "GET" "https://api.spotify.com/v1/browse/new-releases?country=es" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer "
  //original
  // private urlSpotifyNewReleases = 'https://api.spotify.com/v1/browse/new-releases?country=es';
  private urlSpotifyNewReleases = 'https://api.spotify.com/v1/browse/new-releases?country=';

  constructor(private http: HttpClient) { }

  getNewReleases(code: string) {
    //este headers es un ejemplo, no significa nada para la api de randomuser
    const headers = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: Apikey.authorization// lo tipico es Autorization
    });

    //Petición con headers personalizadas
    return this.http.get(this.urlSpotifyNewReleases + code, { headers });
    //si quiero probar el error de la url, que salga el mensaje en pantalla
    // return this.http.get('https://rrrandomuser.me/api/?results=1', { headers });
    //petición normal
    // return this.http.get('https://randomuser.me/api/?results=1');
    // this.http.get('https://randomuser.me/api/?results=10').subscribe((data: any) => {
    //   console.log('Aquí esta la data', data);
    //   console.log('El nombre es:', data.results[0].name.first);
    //   this.myUsers = data.results;
    //   console.log('MyUsers:', this.myUsers);
    // });
  }

  getCountries() {
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }

}
