import { Component } from '@angular/core';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent {
  show=false;
  name='Peter';
  disable=false;
  title: string="Get Text Box Value & Print";
  displayVal='';
  getValue(val:string){
    console.warn(val)
    this.displayVal=val;
  }
  count=0;
  getCount(type:string){

    type==='pluse' ? this.count++ : this.count--;

  }
}
