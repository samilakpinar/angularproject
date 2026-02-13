import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularproject';

   hearts: any[] = [];
  balloons: any[] = [];
  showCard = false;

  ngOnInit(): void {
    this.generateHearts();
    this.generateBalloons();

    // 4 saniye sonra kart çıksın
    setTimeout(() => {
      this.showCard = true;
    }, 4000);
  }

  generateHearts() {
    for (let i = 0; i < 20; i++) {
      this.hearts.push({
        left: Math.random() * 100,
        duration: 4 + Math.random() * 4
      });
    }
  }

  generateBalloons() {
    for (let i = 0; i < 10; i++) {
      this.balloons.push({
        left: Math.random() * 100,
        duration: 6 + Math.random() * 4
      });
    }
  }

blackout = false;
showBigLove = false;

startJoke() {

  // ekran kararsın
  this.blackout = true;

  setTimeout(() => {
    // ekran açılsın ve büyük yazı çıksın
    this.blackout = false;
    this.showBigLove = true;
  }, 1500);
}
}
