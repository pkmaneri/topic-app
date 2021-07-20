import { Component, OnInit } from '@angular/core';
import { TopicService } from '../topic.service';

@Component({
  selector: 'app-topic-read',
  templateUrl: './topic-read.component.html',
  styleUrls: ['./topic-read.component.css']
})
export class TopicReadComponent implements OnInit {
  topicList = []

  constructor(private topicService: TopicService) { }
  ngOnInit(): void {
    this.topicService.read().then(res => res.json()).then(data => {
      // console.log(data)
      this.topicList=data;
      console.log(this.topicList)
    })
  }
  

}
