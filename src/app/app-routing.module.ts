import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InitialComponent } from "./initial/initial.component";
import { LocalComponent } from "./local/local.component";
import { ProjectComponent } from "./project/project.component";
import { InterestComponent } from "./interest/interest.component";
import { AreaComumComponent } from "./area-comum/area-comum.component";
import { AptoComponent } from "./apto/apto.component";

const routes: Routes = [
    { path: 'initial', component: InitialComponent },
    {path: 'area-comum', component: AreaComumComponent},
    {path: 'apto', component: AptoComponent},
    { path: 'local', component: LocalComponent },
    { path: 'project', component: ProjectComponent },
    { path: 'interest', component: InterestComponent },
    {path: "", redirectTo: "/initial", pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }