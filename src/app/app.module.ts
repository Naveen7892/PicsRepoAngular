import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './angular-material/material-module';
import { PicsComponent } from './pics-component/pics-component';
import { PicsModule } from './pics-component/pics-module';
import { MatDialogComponent } from './mat-dialog/mat-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PicsComponent,
    MatDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    PicsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [PicsComponent]
})
export class AppModule { }
