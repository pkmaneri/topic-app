import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor() { }
  create(topic:any){
    return fetch( "http://localhost:4000/v1/topic", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(topic),
    });
  }
  read() {
    return fetch("http://localhost:4000/v1/topics");
  }
  delete(id:string) {
    return fetch( "/v1/topic/" + id, {
      method: "delete",
    });
  }
}
