import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { NgSelectModule, NG_SELECT_DEFAULT_CONFIG } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SortPipe } from './sort-pipe';
import { AppService } from './app.service';
@NgModule({
  declarations: [
    AppComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ {
    provide: NG_SELECT_DEFAULT_CONFIG,
    useValue: {
        notFoundText: 'Custom not found'
    }
}, AppService ],
  bootstrap: [AppComponent],
  exports : []
})
export class AppModule { }
