import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent {
  name = new FormControl('', [Validators.required, Validators.email]);
  class = new FormControl('', [Validators.required, Validators.email]);
  level = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage(input: FormControl ) {
    if(input == this.name){
      if (this.name.hasError('required')) {
        return 'You must enter a value';
      }
  
      return this.name.hasError('name') ? 'Not a valid name' : '';
    }

    if(input == this.class){
      if (this.class.hasError('required')) {
        return 'You must enter a value';
      }
  
      return this.class.hasError('class') ? 'Not a valid class' : '';
    }
    if(input == this.level){
      if (this.level.hasError('required')) {
        return 'You must enter a value';
      }
  
      return this.level.hasError('level') ? 'Not a valid level' : '';
    }
    
    return this.name.hasError('name') ? 'Not a valid name' : '';
  }
}
