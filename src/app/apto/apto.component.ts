import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-apto',
  templateUrl: './apto.component.html',
  styleUrls: ['./apto.component.css'],
})
export class AptoComponent {
  selectedView: string = 'frontal'; // "frontal" por padrão
  selectedApto: string = '401'; // Este será um objeto contendo as informações do apartamento selecionado
  currentPage: number = 1;
  currentImg: number = 1;

  apartments: any = {
    frontal: [
      [
        { number: '801', tipologia: '3', areaApto: '117,48', areaEscada: '2,97', areaTotal: '120,45', numVaga: '22 e 21', tipologiaVaga: 'Simples', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'] },
        { number: '802', tipologia: '3', areaApto: '117,27', areaEscada: '4,22', areaTotal: '121,49', numVaga: '02/02A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'] },
        { number: '701', tipologia: '3', areaApto: '123,2', areaEscada: '3,06', areaTotal: '126,26', numVaga: '26 e 25', tipologiaVaga: 'Simples', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'] },
        { number: '702', tipologia: '3', areaApto: '122,74', areaEscada: '4,22', areaTotal: '126,96', numVaga: '03/03A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'] },
        { number: '601', tipologia: '3', areaApto: '123,2', areaEscada: '2,93', areaTotal: '126,13', numVaga: '29 e 28', tipologiaVaga: 'Simples', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'] },
        { number: '602', tipologia: '3', areaApto: '122,74', areaEscada: '4,22', areaTotal: '126,96', numVaga: '04/04A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'] },
        { number: '501', tipologia: '3', areaApto: '123,2', areaEscada: '4,17', areaTotal: '127,37', numVaga: '31 e 30', tipologiaVaga: 'Simples', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'] },
        { number: '502', tipologia: '3', areaApto: '122,74', areaEscada: '4,22', areaTotal: '126,96', numVaga: '05/05A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'] },
        { number: '401', tipologia: '3', areaApto: '138,5', areaEscada: '3,71', areaTotal: '142,21', numVaga: '112 e 32', tipologiaVaga: 'Simples', imgSrc: ['../../assets/imgs plantas-aptos/142-01.png'] },
        { number: '402', tipologia: '3', areaApto: '138,02', areaEscada: '4,22', areaTotal: '142,24', numVaga: '08/08A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/142-02.png'] },
      ],
      [
        { number: '1301', tipologia: '3', areaApto: '117,48', areaEscada: '2,89', areaTotal: '120,37', numVaga: '108/108A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'] },
        { number: '1302', tipologia: '3', areaApto: '117,27', areaEscada: '4,22', areaTotal: '121,49', numVaga: '39/39A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'] },
        { number: '1201', tipologia: '3', areaApto: '117,48', areaEscada: '4,55', areaTotal: '122,03', numVaga: '106/106A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'] },
        { number: '1202', tipologia: '3', areaApto: '117,27', areaEscada: '4,22', areaTotal: '121,49', numVaga: '40/40A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'] },
        { number: '1101', tipologia: '3', areaApto: '117,48', areaEscada: '4,79', areaTotal: '122,27', numVaga: '107/107A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'] },
        { number: '1102', tipologia: '3', areaApto: '117,27', areaEscada: '4,22', areaTotal: '121,49', numVaga: '42/42A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'] },
        { number: '1001', tipologia: '3', areaApto: '117,48', areaEscada: '2,98', areaTotal: '120,46', numVaga: '20/20A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'] },
        { number: '1002', tipologia: '3', areaApto: '117,27', areaEscada: '4,22', areaTotal: '121,49', numVaga: '44/44A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'] },
        { number: '901', tipologia: '3', areaApto: '117,48', areaEscada: '4,79', areaTotal: '122,27', numVaga: '18/18A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'] },
        { number: '902', tipologia: '3', areaApto: '117,27', areaEscada: '4,22', areaTotal: '121,49', numVaga: '01/01A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'] },
        // ... até 1302
      ],
      // 1401 até 1802
      [
        { number: '1801', tipologia: '3', areaApto: '117,48', areaEscada: '2,96', areaTotal: '120,44', numVaga: '67/67A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'] },
        { number: '1802', tipologia: '3', areaApto: '117,27', areaEscada: '4,22', areaTotal: '121,49', numVaga: '66/66A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'] },
        { number: '1701', tipologia: '3', areaApto: '117,48', areaEscada: '4,82', areaTotal: '122,3', numVaga: '102/102A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'] },
        { number: '1702', tipologia: '3', areaApto: '117,27', areaEscada: '4,22', areaTotal: '121,49', numVaga: '35/35A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'] },
        { number: '1601', tipologia: '3', areaApto: '117,48', areaEscada: '4,58', areaTotal: '122,06', numVaga: '103/103A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'] },
        { number: '1602', tipologia: '3', areaApto: '117,27', areaEscada: '4,22', areaTotal: '121,49', numVaga: '36/36A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'] },
        { number: '1501', tipologia: '3', areaApto: '117,48', areaEscada: '2,83', areaTotal: '120,31', numVaga: '104/104A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'] },
        { number: '1502', tipologia: '3', areaApto: '117,27', areaEscada: '4,22', areaTotal: '121,49', numVaga: '37/37A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'] },
        { number: '1401', tipologia: '3', areaApto: '117,48', areaEscada: '4,63', areaTotal: '122,11', numVaga: '105/105A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'] },
        { number: '1402', tipologia: '3', areaApto: '117,27', areaEscada: '4,22', areaTotal: '121,49', numVaga: '38/38A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'] },
        // ... até 1802
      ],
      // 1901 até 2302
      [
        { number: '2301', tipologia: '3', areaApto: '123,2', areaEscada: '9,49', areaTotal: '132,69', numVaga: '111 e 110', tipologiaVaga: 'Simples', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'] },
        { number: '2302', tipologia: '3', areaApto: '122,74', areaEscada: '3,1', areaTotal: '125,84', numVaga: '52 e 50', tipologiaVaga: 'Simples', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'] },
        { number: '2201', tipologia: '3', areaApto: '117,48', areaEscada: '4,22', areaTotal: '121,7', numVaga: '116/116A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'] },
        { number: '2202', tipologia: '3', areaApto: '117,27', areaEscada: '3,12', areaTotal: '120,39', numVaga: '113/113A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'] },
        { number: '2101', tipologia: '3', areaApto: '117,48', areaEscada: '2,53', areaTotal: '120,01', numVaga: '101/101A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'] },
        { number: '2102', tipologia: '3', areaApto: '117,27', areaEscada: '4,22', areaTotal: '121,49', numVaga: '62/62A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'] },
        { number: '2001', tipologia: '3', areaApto: '117,48', areaEscada: '2,42', areaTotal: '119,9', numVaga: '97/97A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'] },
        { number: '2002', tipologia: '3', areaApto: '117,27', areaEscada: '4,22', areaTotal: '121,49', numVaga: '64/64A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'] },
        { number: '1901', tipologia: '3', areaApto: '117,48', areaEscada: '3,03', areaTotal: '120,51', numVaga: '95/95A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'] },
        { number: '1902', tipologia: '3', areaApto: '117,27', areaEscada: '4,22', areaTotal: '121,49', numVaga: '65/65A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'] },
        // ... até 2302
      ],
      // 2401 até 2802
      [
        // ... até 2802
        { number: '2801', tipologia: 'Duplex 3', areaApto: '208,08', areaEscada: '7,33', areaTotal: '215,41', numVaga: '79, 83 e 84', tipologiaVaga: 'Simples', imgSrc: ['../../assets/imgs plantas-aptos/215-inferior.png', '../../assets/imgs plantas-aptos/215-superior.png'] },
        { number: '2802', tipologia: 'Duplex 3', areaApto: '207,3', areaEscada: '7,92', areaTotal: '215,22', numVaga: '82, 80 e 81', tipologiaVaga: 'Simples', imgSrc: ['../../assets/imgs plantas-aptos/215-inferior.png', '../../assets/imgs plantas-aptos/215-superior.png'] },
        { number: '2701', tipologia: '3', areaApto: '123,2', areaEscada: '8,13', areaTotal: '131,33', numVaga: '61 e 89', tipologiaVaga: 'Simples', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'] },
        { number: '2702', tipologia: '3', areaApto: '122,74', areaEscada: '4,22', areaTotal: '126,96', numVaga: '76/76A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'] },
        { number: '2601', tipologia: '3', areaApto: '123,2', areaEscada: '6,55', areaTotal: '129,75', numVaga: '59 e 58', tipologiaVaga: 'Simples', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'] },
        { number: '2602', tipologia: '3', areaApto: '122,74', areaEscada: '4,22', areaTotal: '126,96', numVaga: '60/60A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'] },
        { number: '2501', tipologia: '3', areaApto: '123,2', areaEscada: '3,7', areaTotal: '126,9', numVaga: '54 e 53', tipologiaVaga: 'Simples', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'] },
        { number: '2502', tipologia: '3', areaApto: '122,74', areaEscada: '4,22', areaTotal: '126,96', numVaga: '48/48A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'] },
        { number: '2401', tipologia: '3', areaApto: '123,2', areaEscada: '5,97', areaTotal: '129,17', numVaga: '115 e 51', tipologiaVaga: 'Simples', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'] },
        { number: '2402', tipologia: '3', areaApto: '122,74', areaEscada: '4,22', areaTotal: '126,96', numVaga: '55/55A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'] },
      ],
    ],
    posterior: [
      // 403 até 804
      [
        { number: '804', tipologia: '3', areaApto: '88,42', areaEscada: '4,58', areaTotal: '93', numVaga: '14/14A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'] },
        { number: '803', tipologia: '3', areaApto: '88,42', areaEscada: '-', areaTotal: '88,42', numVaga: '15/15A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'] },
        { number: '704', tipologia: '3', areaApto: '88,42', areaEscada: '3,12', areaTotal: '91,54', numVaga: '23/23A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'] },
        { number: '703', tipologia: '3', areaApto: '88,42', areaEscada: '4,82', areaTotal: '93,24', numVaga: '13/13A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'] },
        { number: '604', tipologia: '3', areaApto: '88,42', areaEscada: '3,06', areaTotal: '91,48', numVaga: '27/27A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'] },
        { number: '603', tipologia: '3', areaApto: '88,42', areaEscada: '-', areaTotal: '88,42', numVaga: '24/24A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'] },
        { number: '504', tipologia: '3', areaApto: '88,42', areaEscada: '-', areaTotal: '88,42', numVaga: '07/07A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'] },
        { number: '503', tipologia: '3', areaApto: '88,42', areaEscada: '-', areaTotal: '88,42', numVaga: '06/06A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'] },
        { number: '404', tipologia: '3', areaApto: '93,81', areaEscada: '-', areaTotal: '93,81', numVaga: '11/11A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'] },
        { number: '403', tipologia: '3', areaApto: '107,84', areaEscada: '-', areaTotal: '107,84', numVaga: '10/10A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'] },
        // ... até 804 
      ],
      // 903 até 1304
      [
        { number: '1304', tipologia: '3', areaApto: '88,42', areaEscada: '3,92', areaTotal: '92,34', numVaga: '71/71A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'] },
        { number: '1303', tipologia: '3', areaApto: '88,42', areaEscada: '4,38', areaTotal: '92,8', numVaga: '70/70A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'] },
        { number: '1204', tipologia: '3', areaApto: '88,42', areaEscada: '2,91', areaTotal: '91,33', numVaga: '73/73A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'] },
        { number: '1203', tipologia: '3', areaApto: '88,42', areaEscada: '2,98', areaTotal: '91,4', numVaga: '72/72A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'] },
        { number: '1104', tipologia: '3', areaApto: '88,42', areaEscada: '3,8', areaTotal: '92,22', numVaga: '33/33A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'] },
        { number: '1103', tipologia: '3', areaApto: '88,42', areaEscada: '-', areaTotal: '88,42', numVaga: '43/43A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'] },
        { number: '1004', tipologia: '3', areaApto: '88,42', areaEscada: '2,89', areaTotal: '91,31', numVaga: '19/19A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'] },
        { number: '1003', tipologia: '3', areaApto: '88,42', areaEscada: '-', areaTotal: '88,42', numVaga: '45/45A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'] },
        { number: '904', tipologia: '3', areaApto: '88,42', areaEscada: '4,54', areaTotal: '92,96', numVaga: '17/17A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'] },
        { number: '903', tipologia: '3', areaApto: '88,42', areaEscada: '-', areaTotal: '88,42', numVaga: '16/16A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'] },
        // ... até 1304
      ],
      // 1403 até 1804
      [
        { number: '1804', tipologia: '3', areaApto: '88,42', areaEscada: '3,01', areaTotal: '91,43', numVaga: '94/94A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'] },
        { number: '1803', tipologia: '3', areaApto: '88,42', areaEscada: '-', areaTotal: '88,42', numVaga: '69/69A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'] },
        { number: '1704', tipologia: '3', areaApto: '88,42', areaEscada: '-', areaTotal: '88,42', numVaga: '34/34A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'] },
        { number: '1703', tipologia: '3', areaApto: '88,42', areaEscada: '2,62', areaTotal: '91,04', numVaga: '93/93A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'] },
        { number: '1604', tipologia: '3', areaApto: '88,42', areaEscada: '2,68', areaTotal: '91,1', numVaga: '92/92A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'] },
        { number: '1603', tipologia: '3', areaApto: '88,42', areaEscada: '2,83', areaTotal: '91,25', numVaga: '91/91A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'] },
        { number: '1504', tipologia: '3', areaApto: '88,42', areaEscada: '2,7', areaTotal: '91,12', numVaga: '90/90A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'] },
        { number: '1503', tipologia: '3', areaApto: '88,42', areaEscada: '-', areaTotal: '88,42', numVaga: '109/109A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'] },
        { number: '1404', tipologia: '3', areaApto: '88,42', areaEscada: '3,21', areaTotal: '91,63', numVaga: '68/68A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'] },
        { number: '1403', tipologia: '3', areaApto: '88,42', areaEscada: '-', areaTotal: '88,42', numVaga: '41/41A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'] },
        // ... até 1804
      ],
      // 1903 até 2304
      [
        { number: '2304', tipologia: '3', areaApto: '88,42', areaEscada: '-', areaTotal: '88,42', numVaga: '09/09A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'] },
        { number: '2303', tipologia: '3', areaApto: '88,42', areaEscada: '3,94', areaTotal: '92,36', numVaga: '49/49A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'] },
        { number: '2204', tipologia: '3', areaApto: '88,42', areaEscada: '2,38', areaTotal: '90,8', numVaga: '117/117A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'] },
        { number: '2203', tipologia: '3', areaApto: '88,42', areaEscada: '-', areaTotal: '88,42', numVaga: '12/12A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'] },
        { number: '2104', tipologia: '3', areaApto: '88,42', areaEscada: '2,35', areaTotal: '90,77', numVaga: '114/114A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'] },
        { number: '2103', tipologia: '3', areaApto: '88,42', areaEscada: '-', areaTotal: '88,42', numVaga: '63/63A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'] },
        { number: '2004', tipologia: '3', areaApto: '88,42', areaEscada: '2,59', areaTotal: '91,01', numVaga: '100/100A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'] },
        { number: '2003', tipologia: '3', areaApto: '88,42', areaEscada: '2,42', areaTotal: '90,84', numVaga: '99/99A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'] },
        { number: '1904', tipologia: '3', areaApto: '88,42', areaEscada: '4,38', areaTotal: '92,8', numVaga: '98/98A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'] },
        { number: '1903', tipologia: '3', areaApto: '88,42', areaEscada: '3,01', areaTotal: '91,43', numVaga: '96/96A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'] },
        // ... até 2304
      ],
      // 2403 até 2804
      [
        { number: '2804', tipologia: 'Duplex 3', areaApto: '164,77', areaEscada: '4,44', areaTotal: '169,21', numVaga: '88 e 87', tipologiaVaga: 'Simples', imgSrc: ['../../assets/imgs plantas-aptos/170-inferior.png', '../../assets/imgs plantas-aptos/170-superior.png'] },
        { number: '2803', tipologia: 'Duplex 3', areaApto: '164,77', areaEscada: '7,04', areaTotal: '171,81', numVaga: '78 e 77/77A', tipologiaVaga: 'Simples e Dupla', imgSrc: ['../../assets/imgs plantas-aptos/170-inferior.png', '../../assets/imgs plantas-aptos/170-superior.png'] },
        { number: '2704', tipologia: '3', areaApto: '88,42', areaEscada: '4,82', areaTotal: '93,24', numVaga: '74/74A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'] },
        { number: '2703', tipologia: '3', areaApto: '88,42', areaEscada: '4,58', areaTotal: '93', numVaga: '75/75A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'] },
        { number: '2604', tipologia: '3', areaApto: '88,42', areaEscada: '4,72', areaTotal: '93,14', numVaga: '86/86A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'] },
        { number: '2603', tipologia: '3', areaApto: '88,42', areaEscada: '3,12', areaTotal: '91,54', numVaga: '85/85A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'] },
        { number: '2504', tipologia: '3', areaApto: '88,42', areaEscada: '3,12', areaTotal: '91,54', numVaga: '56/56A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'] },
        { number: '2503', tipologia: '3', areaApto: '88,42', areaEscada: '4,72', areaTotal: '93,14', numVaga: '57/57A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'] },
        { number: '2404', tipologia: '3', areaApto: '88,42', areaEscada: '4,58', areaTotal: '93', numVaga: '47/47A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'] },
        { number: '2403', tipologia: '3', areaApto: '88,42', areaEscada: '4,82', areaTotal: '93,24', numVaga: '46/46A', tipologiaVaga: 'Dupla', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'] },
        // ... até 2804
      ],
    ],
  };

  get currentAptos() {
    return this.selectedView === 'frontal' ? this.apartments.frontal[this.currentPage - 1] : this.apartments.posterior[this.currentPage - 1];
  }

  changePage(direction: string) {
    const maxPage = this.selectedView === 'frontal' ? this.apartments.frontal.length : this.apartments.posterior.length;
    if (direction === 'next' && this.currentPage < maxPage) {
      this.currentPage++;
    } else if (direction === 'prev' && this.currentPage > 1) {
      this.currentPage--;
    }
    this.currentImg = 1;
    this.selectedApto = this.selectedView === 'frontal' ? this.apartments.frontal[this.currentPage - 1][8].number : this.apartments.posterior[this.currentPage - 1][8].number;
  }

  changeImgPlanta(direction: string, imgApto: any) {
    if (direction === 'next' && this.currentImg < imgApto.length) {
      this.currentImg++;
    } else if (direction === 'prev' && this.currentImg > 1) {
      this.currentImg--;
    }
  }

  onViewChange(view: string) {
    this.selectedView = view;
    this.currentPage = 1; // Reinicia a página ao alternar a visão
    this.selectedApto = this.selectedView === 'frontal' ? this.apartments.frontal[this.currentPage - 1][8].number : this.apartments.posterior[this.currentPage - 1][8].number;
  }

  selectApto(aptoNumber: string) {
    this.selectedApto = aptoNumber;
    this.currentImg = 1;
  }


}
