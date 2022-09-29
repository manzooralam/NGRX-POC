import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { reducers } from './Store/reducers';
// import { RouterSerializer } from './Store/routerSerializer';
// import { InMemoryService } from './Store/Services/in-memory.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { EmployeeEffects } from './Store/Effects/employee.effects';
import { employeeReducer } from './Store/Reducers/employee.reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,

    // StoreModule.forRoot(movieReducer, {
    //   runtimeChecks: {
    //     // strictStateImmutability: true,
    //     // strictActionImmutability: true,
    //     // strictStateSerializability: true,
    //     // strictActionSerializability: false,
    //     // strictActionWithinNgZone: true,
    //     // strictActionTypeUniqueness: true,
    //   },
    // }),
    // // HttpClientInMemoryWebApiModule.forRoot(InMemoryService),
    // StoreModule.forRoot({ reducers: MovieState }),
    // EffectsModule.forRoot([MovieEffects]),
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25,
    //   logOnly: environment.production,
    // }),

    // StoreModule.forRoot({}, {}),

    /* Register the Reducer -> used inside the application */
    // StoreModule.forRoot({ users: userReducer }),
    StoreModule.forRoot({ employees: employeeReducer }),
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryService),
    // StoreModule.forRoot({ movies: movieReducer, user: userReducer }),
    EffectsModule.forRoot([EmployeeEffects]),

    // /* Added : After installed: ng add @ngrx/store-devtools */
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),

    // EmployeesModule,
    // StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
