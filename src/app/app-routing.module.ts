import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent, HomeComponent } from './pages';
import { GameResolver } from './resolvers';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: ':id',
    component: GameComponent,
    resolve: {
      game: GameResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
