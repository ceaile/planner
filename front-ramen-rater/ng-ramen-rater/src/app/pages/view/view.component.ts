import { Component, Input, OnInit } from '@angular/core';
import { RamenDTO } from '../../shared/interfaces/ramen';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view',
  standalone: true,
  imports: [],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent implements OnInit {

@Input({required:true}) ramen!:RamenDTO;//recoge el ramen devuelto por el resolver

constructor(private _router:Router) {}

 ngOnInit(){
  console.log("view component on init");
  if (!this.ramen){
    console.log("there was en error retrieving this ramen from the resolver");
    this._router.navigate(["home", "there was en error viewing this ramen info, sorry"])
  }
 }

}
