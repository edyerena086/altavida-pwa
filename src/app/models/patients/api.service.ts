import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

	apiURL: string = 'http://altavida.test/api/';

  constructor(private httpClient: HttpClient) { }

  public getInitialPatientInfo(patientId: string) {
  	let url = this.apiURL  + 'patient/initial-form';
  	let params = {
  		id: patientId
  	}
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

  	return this.httpClient.post(url, params);
  }
}
