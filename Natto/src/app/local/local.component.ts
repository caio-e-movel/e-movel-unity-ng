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
        { name: 'Hospital Neurológico', time: '4 min' },
        { name: 'Órion Complex', time: '2 min' }
      ]
    },
    {
      categoria: 'COMPRAS',
      visibility: true,
      itens: [
        { name: 'Extra Supermercado', time: '3 min' },
        { name: 'Goiânia Shopping', time: '4 min' },
        { name: 'Shopping Bougainville', time: '3 min' }
      ]
    },
    {
      categoria: 'PARQUES',
      visibility: true,
      itens: [
        { name: 'Lago das Rosas', time: '4 min' },
        { name: 'Parque Vaca Brava', time: '4 min' },
        { name: 'Parque Areião', time: '4 min' },
        { name: 'Praça T-23', time: '2 min' }
      ]
    },
    {
      categoria: 'EDUCAÇÃO',
      visibility: true,
      itens: [
        { name: 'Colégio Protágoras', time: '2 min' },
        { name: 'Colégio WR', time: '2 min' },
        { name: 'Escola Interamérica', time: '4 min' },
        { name: 'IPOG', time: '3 min' }
      ]
    },
    {
      categoria: 'OUTROS',
      visibility: true,
      itens: [
        { name: 'TRT', time: '1 min' },
        { name: 'Stand e Decorado Natto', time: '2 min' }
      ]
    }
  ];

  toggleVisibility(local: any){
    local.visibility = !local.visibility
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
