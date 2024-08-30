import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {
  localizacoes = [
    {
      categoria: 'SAÚDE',
      visibility: true,
      itens: [
        { name: 'Hospital Neurológico', time: '4 min', link: 'hospital-neurologico' },
        { name: 'Órion Complex', time: '2 min', link: 'orion' }
      ]
    },
    {
      categoria: 'COMPRAS',
      visibility: true,
      itens: [
        { name: 'Extra Supermercado', time: '3 min', link: 'extra' },
        { name: 'Goiânia Shopping', time: '4 min', link: 'goiania-shopping' },
        { name: 'Shopping Bougainville', time: '3 min', link: 'bougainville' }
      ]
    },
    {
      categoria: 'PARQUES',
      visibility: true,
      itens: [
        { name: 'Lago das Rosas', time: '4 min', link: 'lago-da-rosa' },
        { name: 'Parque Vaca Brava', time: '4 min', link: 'vaca-brava' },
        { name: 'Parque Areião', time: '4 min', link: 'pq-areiao' },
        { name: 'Praça T-23', time: '2 min', link: 't-23' }
      ]
    },
    {
      categoria: 'EDUCAÇÃO',
      visibility: true,
      itens: [
        { name: 'Colégio Protágoras', time: '2 min', link: 'protagoras' },
        { name: 'Colégio WR', time: '2 min', link: 'wr' },
        { name: 'Escola Interamérica', time: '4 min', link: 'interamerica' },
        { name: 'IPOG', time: '3 min', link: 'ipog' }
      ]
    },
    {
      categoria: 'OUTROS',
      visibility: true,
      itens: [
        { name: 'TRT', time: '1 min', link: 'trt' },
        { name: 'Stand e Decorado Natto', time: '2 min', link: 'stand-decorado-natto' }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  toggleVisibility(local: any) {
    local.visibility = !local.visibility;
  }

  getModalId(categoria: string, itemName: string): string {
    return categoria.toLowerCase().replace(/ /g, '-') + '-' + itemName.toLowerCase().replace(/ /g, '-');
  }

  getImagePath(categoria: string, itemLink: string): string {
    return '../../assets/locais/' + itemLink + '.jpg';
  }
}
