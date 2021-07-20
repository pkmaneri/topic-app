import { Component, OnInit } from '@angular/core';
import { TopicService } from '../topic.service';

@Component({
  selector: 'app-topic-create',
  templateUrl: './topic-create.component.html',
  styleUrls: ['./topic-create.component.css']
})
export class TopicCreateComponent implements OnInit {
  state = {
    topicName: "",
    what: "",
    when: "",
    how:""
  }
  topicList=[]


  constructor(private topicService : TopicService) { }

  ngOnInit(): void {
   
  }

  handleChange(event:any) {
    const prevTopic=JSON.parse(JSON.stringify(this.state));   
    prevTopic[event.target.name]=event.target.value;
    this.state=prevTopic
    // console.log(this.state)
  }
  remove(id:string){
    this.topicService.delete(id).then(() => {
      this.topicList    
    });
  }
 
  handleSubmit(event:any) {
    event.preventDefault()
    this.topicService.create(this.state).then(res=>res.json()).then(data => console.log(data))
  }

}

