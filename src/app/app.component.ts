import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from './app.service';
import { Attribute, ValuesList } from './interfaces';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public title = 'my-angular-app';
  public attributeList: Attribute[] = [];
  public valuesList: ValuesList[] = [];
  public currentAttr = {name: '', values: ''};
  constructor(private appService: AppService) { }

  ngOnInit() {
    // Get attibutes list api call
    this.appService.getAttributes().subscribe( res => {
      this.attributeList = res;
    });
    // Get values list api call
    this.appService.getValuesList().subscribe( res => {
      this.valuesList = res;
    });
  }
  // set current selected attibute;
  selectArribute(attr) {
    this.currentAttr = attr;
  }
  // add value to seleted attribute;
  selectValue(attr) {
    let alreadyExist = false;
    const values = this.currentAttr.values.split(',');
    if (this.currentAttr.name) {
      for (let i = 0; i < values.length; i++) {
        if (values[i].toLowerCase() === attr.name.toLowerCase()) {
          alreadyExist = true;
        }
    }
      if (!alreadyExist) {
        this.currentAttr.values += ',' + attr.name;
      }
    }

  }

  ngOnDestroy() {
  }

  // check value exist in selected arribute if exist return true else false;
  checkSeleted(value) {
    let status = false;
    if (this.currentAttr.values) {
      const values = this.currentAttr.values.split(',');
      for (let i = 0; i < values.length; i++) {
          if (values[i].toLowerCase() === value.toLowerCase()) {
            status = true;
          }
      }
    }
    return status;
  }
  trackByFn(index, item) {
    return item.id;
  }
}
