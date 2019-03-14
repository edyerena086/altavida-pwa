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

	public initialForm = {
		nombre: '',
		fechaDeNacimiento: '',
		genero: '',
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
		saludVejes: ''
	}

  constructor(private route: ActivatedRoute, private apiService: ApiService) { 
  }

  ngOnInit() {
  	this.patientId = this.route.snapshot.paramMap.get('id');

  	//Se manda a realizar la peticion ajax
  	this.apiService.getInitialPatientInfo(this.patientId).subscribe((res) => {
  		this.showInitialForm = true;
  	});
  }

}
