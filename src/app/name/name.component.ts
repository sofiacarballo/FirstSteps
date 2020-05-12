import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css'],
})
export class NameComponent implements OnInit {

  m = 'Hey'

  constructor() { }

  ngOnInit(): void {
    return alert(this.m)
  }

}
