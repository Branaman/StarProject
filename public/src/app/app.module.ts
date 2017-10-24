// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
// app
import { AppComponent } from './app.component';
// services
import {FormManagerService} from './services/form-manager.service';
import {SheetCalculatorService} from './services/sheet-calculator.service';
// components
import { LogInComponent } from './components/log-in/log-in.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ClassCreatorComponent } from './components/class-creator/class-creator.component';
import { CharacterCreatorComponent } from './components/character-creator/character-creator.component';
import { ItemCreatorComponent } from './components/item-creator/item-creator.component';
import { ThemeCreatorComponent } from './components/theme-creator/theme-creator.component';
import { FeatCreatorComponent } from './components/feat-creator/feat-creator.component';
import { RaceCreatorComponent } from './components/race-creator/race-creator.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegistrationComponent,
    ClassCreatorComponent,
    CharacterCreatorComponent,
    ItemCreatorComponent,
    ThemeCreatorComponent,
    FeatCreatorComponent,
    RaceCreatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FormManagerService, SheetCalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
