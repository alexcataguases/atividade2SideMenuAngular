import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encomendas',
  templateUrl: './encomendas.page.html',
  styleUrls: ['./encomendas.page.scss'],
})
export class EncomendasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //---------------------------------DOBRAR--------------------------------
  dobro: number=0;
  formulario: any = {valor: ''};
  //formulario: any = {valor: '', parcela1: '', parcela2: '' };
  
  dobrar(){
    this.dobro=this.formulario.valor*2;
  }

}
