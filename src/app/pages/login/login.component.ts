import { Component, OnInit } from '@angular/core';
import { ServerApiService } from '../../services/server-api.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario : string = 'Heinz';
  contrasena : string = '123456';
  constructor(private api: ServerApiService, private route: Router) { }

  ngOnInit(): void {
  }

  login (){
    this.api.login(this.usuario, this.contrasena).subscribe((respuesta:any)=>{
      localStorage.setItem('token', respuesta.token);
      this.route.navigate(['home'])
    })
  }

  ngform(): void {
   this.ngOnInit()
  }

}
