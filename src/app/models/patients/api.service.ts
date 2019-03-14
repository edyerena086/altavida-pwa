import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  	return this.httpClient.post(url, params);
  }
}
