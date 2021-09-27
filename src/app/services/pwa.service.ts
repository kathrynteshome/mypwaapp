import { Platform } from '@angular/cdk/platform';
import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';
import { PromptComponent } from '../components/prompt/prompt.component';

@Injectable({
  providedIn: 'root',
})
export class PwaService {
  private promptEvent: any;

  constructor(
    private bottomSheet: MatBottomSheet,
    private platform: Platform
  ) {}

  public initPwaPrompt(): void {

    if (this.platform.isBrowser) {
      console.log('platform ', this.platform);
      window.addEventListener('beforeinstallprompt', (event: any) => {
        event.preventDefault();
        
        console.log('beforeinstallprompt triggered');
        this.promptEvent = event;
        this.openPromptComponent('browser');
      });
    }
    
    if (this.platform.ANDROID) {
      window.addEventListener('beforeinstallprompt', (event: any) => {
        event.preventDefault();
        this.promptEvent = event;
        this.openPromptComponent('android');
      });
    }

    

    if (this.platform.IOS) {
      alert('IOS Device');
      window.addEventListener('beforeinstallprompt', (event: any) => {
        alert('IOS Device beforeinstallprompt');
        let navigator = window.navigator as any;
        const isInStandaloneMode = ('standalone' in navigator && navigator['standalone']);
        if (!isInStandaloneMode) {
          this.openPromptComponent('ios');
        }
      });
    }
  }

  private openPromptComponent(mobileType: 'ios' | 'android' | 'browser') {
    timer(3000)
      .pipe(take(1))
      .subscribe(() =>
        this.bottomSheet.open(PromptComponent, {
          data: { mobileType, promptEvent: this.promptEvent },
        })
      );
  }
}
