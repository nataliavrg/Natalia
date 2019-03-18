import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  valor1:number = 0;
  valor2:number = 0;

  clicar(): void{
    let total = Number(this.valor1) + Number(this.valor2);
    alert('A soma é: '+total);
  }

}
