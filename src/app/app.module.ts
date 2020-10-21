import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { DatabaseService } from "./database.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ListactorsComponent } from "./listactors/listactors.component";
import { AddactorComponent } from "./addactor/addactor.component";
import { DeleteactorComponent } from "./deleteactor/deleteactor.component";
import { UpdateactorComponent } from "./updateactor/updateactor.component";
import { RouterModule, Routes } from "@angular/router";
import { AddmovieComponent } from './addmovie/addmovie.component';
import { ListmovieComponent } from './listmovie/listmovie.component';
import { DeletemovieComponent } from './deletemovie/deletemovie.component';
import { AddAtoMComponent } from './add-ato-m/add-ato-m.component';

const appRoutes: Routes = [
  { path: "listactors", component: ListactorsComponent },
  { path: "addactor", component: AddactorComponent },
  { path: "updateactor", component: UpdateactorComponent },
  { path: "deleteactor", component: DeleteactorComponent },
  { path: "addmovie", component: AddmovieComponent },
  { path: "listmovie", component: ListmovieComponent },
  { path: "deletemovie", component: DeletemovieComponent },
  { path: "addAtoM", component: AddAtoMComponent },
  { path: "", redirectTo: "/listactors", pathMatch: "full" },
];

@NgModule({
  declarations: [
    AppComponent,
    ListactorsComponent,
    AddactorComponent,
    UpdateactorComponent,
    DeleteactorComponent,
    AddmovieComponent,
    ListmovieComponent,
    DeletemovieComponent,
    AddAtoMComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),

    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}