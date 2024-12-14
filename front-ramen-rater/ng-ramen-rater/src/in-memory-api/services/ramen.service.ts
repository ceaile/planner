import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RAMEN_DATA } from '../ramen-data';
import { Ramen, RamenDTO } from '../../app/shared/interfaces/ramen';
/**
 * imports ramen db array
 * parses it and returns it for table loops in template
 */
@Injectable({
  providedIn: 'root'
})
export class RamenService {

ramen_db!:Ramen[];
parsedRamenDb:RamenDTO[] = [];

constructor() {
  this.ramen_db = RAMEN_DATA; //mock for now
  this.ramen_db.forEach(ramenItem => {
    this.parsedRamenDb.push(this.RamenDBitemToDTO(ramenItem));
  });
}
  getAllRamen():RamenDTO[]{
    return this.parsedRamenDb;
  }

  getRamenById(id:string): RamenDTO|null {
    console.log("getting ramen service  to get ramen by id");
    const ramen =  this.parsedRamenDb.find(ramen=> ramen.id === id)
    if (ramen){
      console.log("it worked! we got the ramen");
      return ramen;
    } else {
      console.log("faillll :( couldnt find ramen");
      return null;
    }
  }

  RamenDBitemToDTO(ramen:Ramen):RamenDTO {                                             {
    const ramenDTO:RamenDTO = {
      id: ramen['Review #'],
      brand: ramen.Brand,
      variety: ramen.Variety,
      style: ramen.Style,
      country: ramen.Country,
      stars: ramen.Stars
    }
    return ramenDTO;
  }
  }


}