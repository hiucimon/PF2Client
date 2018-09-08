import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StatBlockComponent } from './stat-block/stat-block.component';
import {FormsModule} from '@angular/forms';
import { SourcesComponent } from './sources/sources.component';
import {Pf2dataService} from './pf2data.service';
import { CharacterComponent } from './character/character.component';
import { TrainingComponent } from './training/training.component';

@NgModule({
  declarations: [
    AppComponent,
    StatBlockComponent,
    SourcesComponent,
    CharacterComponent,
    TrainingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [Pf2dataService],
  bootstrap: [AppComponent]
})
export class AppModule {
  public foods;
}
