import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerApiService {

  Url = 'http://192.168.120.122:4000'

  constructor(private api: HttpClient) { }

  login(suc_user: string, suc_pass: string) {
    console.log(suc_user, suc_pass);
    return this.api.post(this.Url + '/login', { suc_user, suc_pass })
  }

  server(token: string): Observable<any> {
    let headers = new HttpHeaders().set('access-token', token);

    return this.api.get(this.Url + '/server', { headers: headers })
  }

  sucursal(token: string): Observable<any> {
    let headers = new HttpHeaders().set('access-token', token);
    return this.api.get(this.Url + '/sucursal', { headers: headers })
  }

  cliente(token: string): Observable<any> {
    let headers = new HttpHeaders().set('access-token', token);
    return this.api.get(this.Url + '/cliente', { headers: headers })
  }

  crearCliente(token: string, nombre: string, clavecliente: string) {
    let headers = new HttpHeaders().set('access-token', token);
    return this.api.post(this.Url + '/cliente', { nombre, clavecliente }, { headers: headers })
  }

  eliminarCliente(token: string, id_cliente: string) {
    let headers = new HttpHeaders().set('access-token', token);
    let options = {
      id_cliente: id_cliente
    }
    return this.api.delete(this.Url + '/cliente', { headers: headers, body: options });
  }
  actualizarCliente(token: string, id_cliente: string, nombre: string, clavecliente: string) {
    let headers = new HttpHeaders().set('access-token', token);
    return this.api.put(this.Url + '/cliente', { id_cliente, nombre, clavecliente }, { headers: headers })
  }
  //sucursal
  crearSucursal(token: string, direccion: string, suc_user: string, suc_pass: string) {
    let headers = new HttpHeaders().set('access-token', token);
    return this.api.post(this.Url + '/sucursal', {direccion, suc_user, suc_pass}, { headers: headers })
  }
  //actualizar sucursal
  actualizarSucursal(token: string, id_sucursal: string, direccion: string, suc_user: string, suc_pass: string) {
    let headers = new HttpHeaders().set('access-token', token);
    return this.api.put(this.Url + '/sucursal', { id_sucursal, direccion, suc_user, suc_pass }, { headers: headers })
  }
  //eliminar sucursal
  eliminarSucursal(token: string, id_sucursal: string) {
    let headers = new HttpHeaders().set('access-token', token);
    let options = {
      id_sucursal: id_sucursal
    }
    return this.api.delete(this.Url + '/sucursal', { headers: headers, body: options });
  }
  //crear server
  crearServer(token: string, id_nodo: string, nombre_servidor: string, claveservidor:string, ip_publica:string, portwireguard:string, subred: string, dns:string, ip_privada:string ) {
    let headers = new HttpHeaders().set('access-token', token);
    return this.api.post(this.Url + '/server', { id_nodo, nombre_servidor, claveservidor, ip_publica, portwireguard, subred, dns, ip_privada }, { headers: headers })
  }
  actualizarServer(token: string, id_servidor: string, id_nodo: string, nombre_servidor: string, claveservidor:string, ip_publica:string, portwireguard:string, subred: string, dns:string, ip_privada:string ) {
    let headers = new HttpHeaders().set('access-token', token);
    return this.api.put(this.Url + '/server', { id_servidor, id_nodo, nombre_servidor, claveservidor, ip_publica, portwireguard, subred, dns, ip_privada }, { headers: headers })
  }
  eliminarServer(token: string, id_servidor: string) {
    let headers = new HttpHeaders().set('access-token', token);
    let options = {
      id_servidor: id_servidor
    }
    return this.api.delete(this.Url + '/server', { headers: headers, body: options });
  }
}