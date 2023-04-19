import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './Components/character-list/character-list.component';
import { CreateCharacterComponent } from './Components/create-character/create-character.component';
import { HomePageComponent } from './Components/home-page/home-page.component';

const routes: Routes = [
  { path: 'list', component: CharacterListComponent },
  { path: 'create', component: CreateCharacterComponent },
  { path: '', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }