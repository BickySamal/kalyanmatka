import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data = ['Team Roy - 18' , 'Boyz Group - 45' , 'Milan Night - 45' , 'Right Choice - 56' , 'Lucky Group -89']
  
  liveScore = [
    {
      'team' : 'Madhur Night',
      'score' : '156-876-90'
    },
    {
      'team' : 'Knight Righter',
      'score' : '34-760-90'
    },
    {
      'team' : 'Knight Righter',
      'score' : '34-760-90'
    },
    {
      'team' : 'Knight Righter',
      'score' : '34-760-90'
    }
  ]  

  mainScore = [
    {
      'team' : 'Knight Righter',
      'score' : '34-760-90',
      'to' : '10:20 AM',
      'from' : '11:20 PM',
    },
    {
      'team' : 'Kedar Damdar',
      'score' : '340-60-99',
      'to' : '10:35 AM',
      'from' : '09:20 PM',
    },
    {
      'team' : 'Madhur Night',
      'score' : '340-60-99',
      'to' : '10:35 AM',
      'from' : '09:20 PM',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
