import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CocktailService } from './services/cocktail.service';




@Component({
  selector: 'app-root',
  standalone: true, // Componente standalone
  imports: [NavbarComponent, RouterOutlet, FooterComponent],
  providers: [CocktailService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cocktailWeb';
}
