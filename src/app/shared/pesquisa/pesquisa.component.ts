import { Component } from '@angular/core';


@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss'],
})
export class PesquisaComponent {
  termoPesquisa: string = 'Fonte de fibra';
  selectedOption!: string;
  options: string[] = ['Contém estes ingredientes', 'Apenas estes ingredientes', 'Sem estes ingredientes'];

  buttons = [
    { text: 'Tomate', color:'#BAF279' },
    { text: 'Arroz', color:'#BAF279' },
    { text: 'Manjericão', color:'#BAF279' },
    { text: 'Poucos ingredientes', color:'#FFD875' },
    { text: 'Sem pimentão', color:'#F4C8BF' },
  ];

  deleteButton(button: any): void {
    const index = this.buttons.indexOf(button);
    if (index !== -1) {
      this.buttons.splice(index, 1);
    }
  }
}
