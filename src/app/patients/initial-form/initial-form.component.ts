import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ApiService } from '../../models/patients/api.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-initial-form',
  templateUrl: './initial-form.component.html',
  styleUrls: ['./initial-form.component.css']
})
export class InitialFormComponent implements OnInit {

	patientId: any;
	showInitialForm: boolean = false;
	apiResponse: any;

	public initialForm = {
		nombre: '',
		fechaDeNacimiento: '',
		genero: '',
		estasEmbarazada: '',
		//Si esta embarazada
		semanaDeEmbarazo: '',
		numeroDeEmbarazo: '',
		familiarDiabetes: '',
		ovarioPoliquistico: '',
		embarazoAnterior: '',
		estadoCivil: '',
		numeroDeFamilia: '',
		email: '',
		telefono: '',
		comoTeEnteraste: '',
		dondeVives: '',
		//Secction II
		pesoActual: '',
		estatura: '',
		circunferenciaAbdominal: '',
		circunferenciaCadera: '',
		circunferenciaMuneca: '',
		realizasEjercicio: '',
		consumesAlimentosEjercicio: '',
		fumas: '',
		agualAlDia: '',
		tomasCafe: '',
		tomasAlcohol: '',
		cocinas: '',
		estasEnfermo: '',
		estuvisteEnfermo: '',
		tomasMedicina: '',
		tomasLaxante: '',
		cirugias: '',
		familiarEnfermo: '',
		cuantasVecesComes: '',
		comesAfuera: '',
		tomasVitaminas: '',
		alergiasAlimento: '',
		alimentoQueNoTeDesagrade: '',
		verdurasQueTeGusten: '',
		alimentoQueNoTeGuste: '',
		desayuno: '',
		snackUno: '',
		comida: '',
		snackDos: '',
		cena: '',
		//Section III
		propositoPrincipal: '',
		razonPrincipal: '',
		metaProxima: '',
		metaSeisMeses: '',
		metaUnAnio: '',
		metaDosAnios: '',
		saludVejes: '',
		//Seccion IV
		comoTeVesHoy: '',
		comoTeVesDelgado: '',
		comoTeVesGordo: '',
		comoTeVesEnSeiesMeses: '',
		actividadPrincipal: '',
		duranteDia: '',
		semanasSon: '',
		seMeFacilita: '',
		meCaracteriza: '',
		casiSiempreSoy: '',
		reacciono: '',
		gozoMas: '',
		meDescribenComo: '',
		personaPrimeraVez: '',
		mePropongoAlgo: '',
		antesAccion: '',
		darleSeguimiento: '',
		anteDificultad: '',
		satisfecho: '',
		verdaderoLogro: '',
		prefieroSavores: '',
		prefieroComer: '',
		cantidadComidaSatisfecho: '',
		sigoDietaMeGusta: '',
		sigoDietaNoMeGusta: '',
		estoyCansado: '',
		misAntojos: '',
		meConcentro: '',
		cuandoActividadFisica: '',
		estadoDeAnimo: '',
		problemasAlDormir: '',
		cosasImportantes: ''
	}

  constructor(private route: ActivatedRoute, private apiService: ApiService) { 
  }

  ngOnInit() {
  	this.patientId = this.route.snapshot.paramMap.get('id');

  	//Se manda a realizar la peticion ajax
  	this.apiService.getInitialPatientInfo(this.patientId).subscribe((res) => {
  		this.apiResponse = res;

  		//Set initial values
  		this.init();

  		this.showInitialForm = true;
  	});
  }

  init() {
  	//Check if has data
  	if (this.apiResponse.errors == false) {
  		console.log(this.apiResponse);
  		this.initialForm.nombre = this.apiResponse.client.name + ' ' + this.apiResponse.client.client.last_name;
  		this.initialForm.email = this.apiResponse.client.email;
  		this.initialForm.telefono = this.apiResponse.client.client.phone;
  	}
  }

}
