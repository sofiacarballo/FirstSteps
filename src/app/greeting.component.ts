import { Component } from '@angular/core';

@Component({
    selector: 'greeting',
    template: '<p><h2>Hi {{name}}!</h2><br> Greeting works!<p>'
})

export class GreetingComponent {
  name: string = 'Sofia'
}
