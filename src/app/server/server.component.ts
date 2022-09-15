import { Component, OnInit } from '@angular/core';
import { ServerApiService } from '../services/server-api.service'

import { Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  id_nodo: string ;
  id_server: string ;
  nombre_servidor: string ;
  claveservidor: string ;
  ip_publica: string ; 
  portwireguard: string ;
  subred: string ;
  dns: string ;
  ip_privada: string;
  servers: Array<any> = [];

  constructor(private api: ServerApiService, private route: Router, private _server:ServerApiService ) { }

  ngOnInit(): void {
    this.get();
  }

  get (){
    let token = localStorage.getItem('token')+'';
    console.log(token);
    this._server.server(token).subscribe((respuesta:any)=>{
      console.log(respuesta);
      this.servers = respuesta.server;
      console.log(this.servers)
    })
  }
  crearServer(){
    let token = localStorage.getItem('token')+'';
    console.log(token);
    this._server.crearServer(token,this.id_nodo, this.nombre_servidor, this.claveservidor, this.ip_publica, this.portwireguard, this.subred, this.dns,this.ip_privada).subscribe((respuesta:any)=>{
      console.log(respuesta);
      this.servers = respuesta.server;
      console.log(this.servers)
    })
  }
  asignarIdServer(server:any){
    this.id_server = server.id_server;
    this.id_nodo = server.id_nodo;
    this.nombre_servidor = server.nombre_servidor;
    this.claveservidor = server.claveservidor;
    this.ip_publica = server.ip_publica;
    this.portwireguard = server.portwireguard;
    this.subred = server.subred;
    this.dns = server.dns;
    this.ip_privada = server.ip_privada;

  }
  actualizarServer(){
    let token = localStorage.getItem('token')+'';
    console.log(token);
    this._server.actualizarServer(token, this.id_server,this.id_nodo, this.nombre_servidor, this.claveservidor, this.ip_publica, this.portwireguard, this.subred, this.dns,this.ip_privada).subscribe((respuesta:any)=>{
      console.log(respuesta);
    })
  }

  eliminarServer(id_server: string){
    let token = localStorage.getItem('token')+'';
    console.log(token);
    this._server.eliminarServer(token, id_server).subscribe((respuesta:any)=>{
      console.log(respuesta.mensaje);
    })
  }

  ngform(): void {
   this.ngOnInit()
  }

}
