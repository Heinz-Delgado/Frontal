import { Component, OnInit } from '@angular/core';
import { ServerApiService } from '../services/server-api.service'

import { Router } from '@angular/router';

@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.css']
})
export class SucursalComponent implements OnInit {
  id_sucursal: string = '';
  direccion: string = '';
  suc_user: string = '';
  suc_pass: string = '';
  sucursales: Array<any> = [];
  nombre: string = '';
  telefono: string = '';

  constructor(private api: ServerApiService, private route: Router, private _sucursal: ServerApiService) { }


  ngOnInit(): void {
    this.get();
  }

  get() {
    let token = localStorage.getItem('token') + '';
    console.log(token);
    this._sucursal.sucursal(token).subscribe((respuesta: any) => {
      console.log(respuesta);
      this.sucursales = respuesta.sucursal;
      console.log(this.sucursales)
    })
  }
  crearSucursal() {
    let token = localStorage.getItem('token') + '';
    console.log(token);
    this._sucursal.crearSucursal(token, this.direccion, this.suc_user, this.suc_pass).subscribe((respuesta: any) => {
      console.log(respuesta);
    })
  }
  asignarIdSucursal(sucursal: any) {
    this.id_sucursal = sucursal.id_sucursal;
    this.direccion = sucursal.direccion;
    this.suc_user = sucursal.suc_user;
    this.suc_pass = sucursal.suc_pass;
  }

  actualizarSucursal() {
    let token = localStorage.getItem('token') + '';
    console.log(token);
    this._sucursal.actualizarSucursal(token, this.id_sucursal, this.direccion, this.suc_user, this.suc_pass).subscribe((respuesta: any) => {
      console.log(respuesta);
    })
  }
  eliminarSucursal(id_sucursal: string) {
    let token = localStorage.getItem('token') + '';
    console.log(token);
    this._sucursal.eliminarSucursal(token, id_sucursal).subscribe((respuesta: any) => {
      console.log(respuesta.mensaje);
    })
  }

  ngform(): void {
    this.ngOnInit()
  }

}
