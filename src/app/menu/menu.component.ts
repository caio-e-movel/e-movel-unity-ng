import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../models/menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu_itens : MenuItem[] = [
    {name : 'Início', link: 'initial', icon: 'home'},
    {name: 'Localização', link: 'local', icon: 'location_on'},
    {name: 'Area Comum', link: 'area-comum', icon: 'pool'},
    {name: 'Apto', link: 'apto', icon: 'chair'},
    {name: 'Projeto', link: 'project', icon: 'apartment'},
    {name: 'Interesse', link: 'interest', icon: 'interests'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
