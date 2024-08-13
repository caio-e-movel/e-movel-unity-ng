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
    { key: 'lazer', label: 'LAZER', imgSrc: '../../assets/imgs plantas-area-comum/planta-lazer.png' },
    { key: '2pavimento', label: '2º PAVIMENTO', imgSrc: '../../assets/imgs plantas-area-comum/planta-2pavimento.png' },
    { key: '1pavimento', label: '1º PAVIMENTO', imgSrc: '../../assets/imgs plantas-area-comum/planta-1pavimento.png' },
    { key: 'terreo', label: 'TERREO', imgSrc: '../../assets/imgs plantas-area-comum/planta-terreo.png' },
    { key: 'subsolo', label: 'SUBSOLO', imgSrc: '../../assets/imgs plantas-area-comum/planta-subsolo.png' }
  ];

  floorInfo: {
    [key: string]: { number: string, description: string }[]
  } = {
      terreo: [
        { number: '01', description: 'Connect lobby' },
        { number: '02', description: 'Coworking' },
        { number: '03', description: 'Pulmão social' },
        { number: '04', description: 'Guarita' },
        { number: '05', description: 'Delivery' },
        { number: '06', description: 'Copa funcionários' },
        { number: '07', description: 'Bike Share' },
        { number: '08', description: 'Carregar carro' },
        { number: '09', description: 'Pulmão serviço' },
        { number: '10', description: 'Administração' },
      ],
      '1pavimento': [],
      '2pavimento': [],
      lazer: [
        { number: '01', description: 'Salão de festas' },
        { number: '02', description: 'Copa salão de festas' },
        { number: '03', description: 'Espaço gourmet' },
        { number: '04', description: 'Espaço kids' },
        { number: '05', description: 'Varanda festas' },
        { number: '06', description: 'Terraço kids' },
        { number: '07', description: 'Playground' },
        { number: '08', description: 'Espaço beleza' },
        { number: '09', description: 'Salão de jogos' },
        { number: '10', description: 'Fitness' },
        { number: '11', description: 'Terraço fitness' },
        { number: '12', description: 'Sauna' },
        { number: '13', description: 'Descanso' },
        { number: '14', description: 'Piscina adulta' },
        { number: '15', description: 'Solarium' },
        { number: '16', description: 'Piscina infantil' },
        { number: '17', description: 'Mini quadra' },
        { number: '18', description: 'Grill gourmet' },
        { number: '19', description: 'Horta' },
        { number: '20', description: 'Espaço pet' },
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
}
