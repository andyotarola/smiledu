import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { CrearEstudianteComponent } from './components/crear-estudiante/crear-estudiante.component'

import { MaterialModule } from './material/material.module';

import { appReducer } from './store/app.reducer'
import { effects } from './store/effects'
import { EffectsModule } from '@ngrx/effects';

import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { FilterPipe } from './core/pipe/filter.pipe';
import { ConfirmRemoveComponent } from './components/confirm-remove/confirm-remove.component';
registerLocaleData(localePt, 'es-PE')

@NgModule({
  declarations: [
    AppComponent,
    EstudiantesComponent,
    CrearEstudianteComponent,
    FilterPipe,
    ConfirmRemoveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot(effects)
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-PE' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
