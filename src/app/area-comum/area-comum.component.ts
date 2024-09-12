import { Component } from '@angular/core';

@Component({
  selector: 'app-area-comum',
  templateUrl: './area-comum.component.html',
  styleUrls: ['./area-comum.component.css']
})
export class AreaComumComponent {
  selectedFloor: string = 'terreo';
  selectedInfo = '';

  floors = [
    { key: 'lazer', label: 'LAZER', imgSrc: './assets/imgs plantas-area-comum/planta-lazer.png' },
    { key: '2pavimento', label: '2º PAVIMENTO', imgSrc: './assets/imgs plantas-area-comum/planta-2pavimento.png' },
    { key: '1pavimento', label: '1º PAVIMENTO', imgSrc: './assets/imgs plantas-area-comum/planta-1pavimento.png' },
    { key: 'terreo', label: 'TERREO', imgSrc: './assets/imgs plantas-area-comum/planta-terreo.png' },
    { key: 'subsolo', label: 'SUBSOLO', imgSrc: './assets/imgs plantas-area-comum/planta-subsolo.png' }
  ];

  floorInfo: {
    [key: string]: { number: string, description: string, link: string, x: number, y: number }[]
  } = {
      terreo: [
        { number: '01', description: 'Connect lobby', link: 'connect-lobby', x: 32, y: 56 },
        { number: '02', description: 'Coworking', link: 'coworking', x: 39, y: 63 },
        { number: '03', description: 'Pulmão social', link: '', x: 25, y: 54 },
        { number: '04', description: 'Guarita', link: '', x: 21, y: 60 },
        { number: '05', description: 'Delivery', link: '', x: 25, y: 63 },
        { number: '06', description: 'Copa funcionários', link: '', x: 35, y: 85 },
        { number: '07', description: 'Bike Share', link: 'bike-share', x: 45, y: 85  },
        { number: '08', description: 'Carregar carro', link: '', x: 20, y: 30 },
        { number: '09', description: 'Pulmão serviço', link: '', x: 21, y: 69 },
        { number: '10', description: 'Administração', link: '', x: 45, y: 63 }
      ],
      '1pavimento': [],
      '2pavimento': [],
      lazer: [
        { number: '01', description: 'Salão de festas', link: '', x: 30, y: 50 },
        { number: '02', description: 'Copa salão de festas', link: '', x: 37, y: 65 },
        { number: '03', description: 'Espaço gourmet', link: '', x: 38, y: 36 },
        { number: '04', description: 'Espaço kids', link: 'espaco-kids', x: 44, y: 66 },
        { number: '05', description: 'Varanda festas', link: '', x: 35, y: 27 },
        { number: '06', description: 'Terraço kids', link: '', x: 30, y: 75 },
        { number: '07', description: 'Playground', link: 'playground', x: 45, y: 75 },
        { number: '08', description: 'Espaço beleza', link: '', x: 50, y: 38 },
        { number: '09', description: 'Salão de jogos', link: 'salao-de-jogos', x: 59, y:65 },
        { number: '10', description: 'Fitness', link: 'fitness', x: 63, y: 45 },
        { number: '11', description: 'Terraço fitness', link: '', x: 58, y: 27 },
        { number: '12', description: 'Sauna', link: '', x: 70, y: 67 },
        { number: '13', description: 'Descanso', link: '', x: 70, y: 60 },
        { number: '14', description: 'Piscina adulta', link: '', x: 72, y: 75 },
        { number: '15', description: 'Solarium', link: '', x: 90, y: 72 },
        { number: '16', description: 'Piscina infantil', link: '', x: 82, y: 60 },
        { number: '17', description: 'Mini quadra', link: 'mini-quadra', x: 85, y: 42 },
        { number: '18', description: 'Grill gourmet', link: '', x: 83, y: 29 },
        { number: '19', description: 'Horta', link: '', x: 76, y: 45 },
        { number: '20', description: 'Espaço pet', link: 'espaco-pet', x: 65, y: 28 }
      ],
      subsolo: []
    };

  get selectedFloorInfo() {
    return this.floorInfo[this.selectedFloor];
  }

  selectFloor(floor: string) {
    this.selectedFloor = floor;
  }

  selectInfo(info: string) {
    this.selectedInfo = info;
  }

  getModalId(infoNumber: string): string {
    return 'modal-' + infoNumber;
  }

  getImagePath(link: string): string {
    return link ? './assets/fotos area-comum/' + this.selectedFloor + '/' + link + '.jpg' : '';
  }
}
