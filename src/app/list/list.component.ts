import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  student = [
    { name: 'Vicente',
      surname: 'Alegre',
      languague: ['English', 'Spanish']
    },
    { name: 'Elena',
      surname: 'Diaz',
      languague: ['English', 'Italian']
    }
  ]

  ngOnInit(): void {

  }

}
