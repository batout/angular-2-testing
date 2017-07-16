import {Routes}  from "@angular/router";
import {HomeComponent} from "./components/pages/home/home.component";
import {AboutComponent} from "./components/pages/about/about.component";

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about',      component: AboutComponent }
];
