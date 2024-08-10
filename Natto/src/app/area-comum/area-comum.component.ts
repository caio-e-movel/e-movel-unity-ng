import { Component } from '@angular/core';

@Component({
  selector: 'app-area-comum',
  templateUrl: './area-comum.component.html',
  styleUrls: ['./area-comum.component.css']
})
export class AreaComumComponent {
  selectedFloor: string = 'terreo';

  // floors = [{key: 'subsolo'}, {key: 'terreo'}, {key: '1pavimento'}, {key: '2pavimento'}, {key: 'lazer'}]
  floors = [
    { key: 'lazer', label: 'LAZER', imgSrc: '../../assets/imgs plantas/planta-lazer.png' },
    { key: '2pavimento', label: '2º PAVIMENTO', imgSrc: '../../assets/imgs plantas/planta-2pavimento.png' },
    { key: '1pavimento', label: '1º PAVIMENTO', imgSrc: '../../assets/imgs plantas/planta-1pavimento.png' },
    { key: 'terreo', label: 'TERREO', imgSrc: '../../assets/imgs plantas/planta-terreo.png' },
    { key: 'subsolo', label: 'SUBSOLO', imgSrc: '../../assets/imgs plantas/planta-subsolo.png' }
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
    'lazer': [],
    'subsolo': []
  };

  get selectedFloorInfo() {
    return this.floorInfo[this.selectedFloor];
  }

  selectFloor(floor: string) {
    this.selectedFloor = floor;
  }
}
