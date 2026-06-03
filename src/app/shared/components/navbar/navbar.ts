import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { LanguageService } from '../../../core/services/language.service';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { RouterLinkActive } from "@angular/router";


@Component({
  selector: 'app-navbar',
  imports: [TranslatePipe, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar implements OnInit {
  readonly languageService = inject(LanguageService);
  isComprimed = signal<boolean>(true);
  private timeoutId?: ReturnType<typeof setTimeout>;

  mouseEnter() {
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => this.isComprimed.set(false), 450)

  }
  mouseLeave() {
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => this.isComprimed.set(true), 100)

  }


  ngOnInit(): void {
    const blendy = "HOLA";

  }



}
