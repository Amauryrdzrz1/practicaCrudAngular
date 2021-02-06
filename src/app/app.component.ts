import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'
import { Post } from './post';
import { Observable } from 'rxjs';
import { trigger,state,style,animate,transition, keyframes } from "@angular/animations";
import { FormBuilder, FormGroup } from '@angular/forms';
import { Id } from './id';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('cambiarForma', [
      state('cuadrado', style({
        backgroundColor: 'red',
        borderRadius: '0%',
      })),
      state('circulo', style({
        backgroundColor: 'green',
        borderRadius: '50%',
      })),
      transition('cuadrado => circulo', [
        animate('1s')
      ]),
      transition('circulo => cuadrado', [
        animate('2s',keyframes([
          style({backgroundColor: 'black',offset: 0.25}),
          style({backgroundColor: 'yellow',offset: 0.50}),
          style({backgroundColor: 'purple',offset: 0.90}),
          style({backgroundColor: 'brown',offset: 1.00})
        ]))
      ])
    ])
  ]
})
export class AppComponent {
  estadoFigura = true
  idForm: FormGroup = null;
  idUsuario: Id;
  transicion(){
    this.estadoFigura = !this.estadoFigura
  }



  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  posts: Observable<Post[]>;
  newPost: Observable<any>;
  title = 'angularPractica3';
  constructor(private http: HttpClient, private router: Router, private fb:FormBuilder){
    this.createForm();
  }

  getPosts(){
    let params = new HttpParams().set('userId','1');
    //let params = new HttpHeaders().set('Authorization','auth-token');
    this.posts = this.http.get<Post[]>(this.ROOT_URL + '/posts', {params})
    
  }

  delete(){
    this.setId()
    this.http.delete('http://127.0.0.1:3333/user'+3)
    console.log('entro')
    console.log(this.idUsuario)
  }

  createForm(): void {
    this.idForm = this.fb.group({
      id: ['']
    })
  }
  createPost(){
    const data: Post = {
      id: null,
      userId: 244,
      title: 'awdwaiiwidasda',
      body: 'wdawdwdas'
    }

    this.newPost = this.http.post<Post>(this.ROOT_URL + '/posts', data)
  }

  setId(){
    this.idUsuario = {
      id: this.idForm.get('id').value
      
    }
  }
  obtenerid(){
    if(this.idForm.valid){
    }
  }
}
