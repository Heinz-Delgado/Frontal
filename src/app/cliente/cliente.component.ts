import { Component, OnInit } from '@angular/core';
import { ServerApiService } from '../services/server-api.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  id_cliente: string = '';
  nombre: string = '';
  clavecliente : string = '';
  clientes: Array<any> = [];

  constructor(private api: ServerApiService, private route: Router, private _cliente:ServerApiService ) { }

  ngOnInit(): void {
    this.get();
  }
  get (){
    let token = localStorage.getItem('token')+'';
    console.log(token);
    this._cliente.cliente(token).subscribe((respuesta:any)=>{
      console.log(respuesta);
      
      this.clientes = respuesta.cliente;
      console.log(this.clientes)
    })
  }
  
  crearCliente(){
    let token = localStorage.getItem('token')+'';
    console.log(token);
    this._cliente.crearCliente(token, this.nombre, this.clavecliente).subscribe((respuesta:any)=>{
      console.log(respuesta);
      this.clientes = respuesta.cliente;
      console.log(this.clientes)
    })
  }

  eliminarCliente(id_cliente: string){
    let token = localStorage.getItem('token')+'';
    console.log(token);
    this._cliente.eliminarCliente(token, id_cliente).subscribe((respuesta:any)=>{
      console.log(respuesta.mensaje);
    })
  }

  asignarIdCliente(cliente:any){
    this.id_cliente = cliente.id_cliente;
    this.nombre = cliente.nombre;
    this.clavecliente = cliente.clavecliente;
  }

  actualizarCliente(){
    let token = localStorage.getItem('token')+'';
    console.log(token);
    this._cliente.actualizarCliente(token, this.id_cliente, this.nombre, this.clavecliente).subscribe((respuesta:any)=>{
      console.log(respuesta);
    })
  }

  ngform(): void {
   this.ngOnInit()
  }

}

