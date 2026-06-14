import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [TranslateModule],
  templateUrl: './footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer implements OnInit, OnDestroy {
  readonly time = signal<string>('');
  readonly year = signal<number>(new Date().getFullYear());

  private interval: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.updateTime();
    this.interval = setInterval(() => this.updateTime(), 1000);
  }

  ngOnDestroy(): void {
    if (this.interval) clearInterval(this.interval);
  }

  private updateTime(): void {
    const now = new Date();
    const peru = new Intl.DateTimeFormat('es-PE', {
      timeZone: 'America/Lima',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }).format(now);

    this.time.set(peru);
  }
}
