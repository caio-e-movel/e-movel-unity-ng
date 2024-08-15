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
        { number: '801', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'], tipologia: '3', areaApto: '120.45', areaEscada: '21.76', areaTotal: '142.21', numVaga: '15', tipologiaVaga: 'Coberta' },
        { number: '802', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'], tipologia: '3', areaApto: '121.49', areaEscada: '20.75', areaTotal: '142.24', numVaga: '16', tipologiaVaga: 'Coberta' },
        { number: '701', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'], tipologia: '3', areaApto: '126.26', areaEscada: '15.95', areaTotal: '142.21', numVaga: '12', tipologiaVaga: 'Coberta' },
        { number: '702', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'], tipologia: '3', areaApto: '126.96', areaEscada: '15.28', areaTotal: '142.24', numVaga: '13', tipologiaVaga: 'Coberta' },
        { number: '601', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'], tipologia: '3', areaApto: '126.13', areaEscada: '16.08', areaTotal: '142.21', numVaga: '11', tipologiaVaga: 'Coberta' },
        { number: '602', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'], tipologia: '3', areaApto: '126.96', areaEscada: '15.28', areaTotal: '142.24', numVaga: '14', tipologiaVaga: 'Coberta' },
        { number: '501', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'], tipologia: '3', areaApto: '127.13', areaEscada: '15.08', areaTotal: '142.21', numVaga: '10', tipologiaVaga: 'Coberta' },
        { number: '502', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'], tipologia: '3', areaApto: '126.96', areaEscada: '15.28', areaTotal: '142.24', numVaga: '11', tipologiaVaga: 'Coberta' },
        { number: '401', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/142-01.png'], tipologia: '3', areaApto: '138,5', areaEscada: '3,71', areaTotal: '142,21', numVaga: '112 e 32', tipologiaVaga: 'Simples' },
        { number: '402', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/142-02.png'], tipologia: '3', areaApto: '138,02', areaEscada: '4,22', areaTotal: '142,24', numVaga: '08/08A', tipologiaVaga: 'Dupla' },
      ],
      // 901 até 1302
      [
        { number: '1301', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'], tipologia: 'B', areaApto: '130.00', areaEscada: '12.21', areaTotal: '142.21', numVaga: '19', tipologiaVaga: 'Coberta' },
        { number: '1302', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'], tipologia: 'B', areaApto: '131.00', areaEscada: '11.24', areaTotal: '142.24', numVaga: '20', tipologiaVaga: 'Coberta' },
        { number: '1201', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'], tipologia: 'A', areaApto: '126.26', areaEscada: '15.95', areaTotal: '142.21', numVaga: '12', tipologiaVaga: 'Coberta' },
        { number: '1202', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'], tipologia: 'A', areaApto: '126.96', areaEscada: '15.28', areaTotal: '142.24', numVaga: '13', tipologiaVaga: 'Coberta' },
        { number: '1101', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'], tipologia: 'A', areaApto: '126.13', areaEscada: '16.08', areaTotal: '142.21', numVaga: '11', tipologiaVaga: 'Coberta' },
        { number: '1102', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'], tipologia: 'A', areaApto: '126.96', areaEscada: '15.28', areaTotal: '142.24', numVaga: '14', tipologiaVaga: 'Coberta' },
        { number: '1001', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'], tipologia: 'A', areaApto: '127.13', areaEscada: '15.08', areaTotal: '142.21', numVaga: '10', tipologiaVaga: 'Coberta' },
        { number: '1002', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'], tipologia: 'A', areaApto: '126.96', areaEscada: '15.28', areaTotal: '142.24', numVaga: '11', tipologiaVaga: 'Coberta' },
        { number: '901', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'], tipologia: 'B', areaApto: '130.00', areaEscada: '12.21', areaTotal: '142.21', numVaga: '17', tipologiaVaga: 'Coberta' },
        { number: '902', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'], tipologia: 'B', areaApto: '131.00', areaEscada: '11.24', areaTotal: '142.24', numVaga: '18', tipologiaVaga: 'Coberta' },
        // ... até 1302
      ],
      // 1401 até 1802
      [
        { number: '1801', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'], tipologia: 'C', areaApto: '128.00', areaEscada: '14.21', areaTotal: '142.21', numVaga: '23', tipologiaVaga: 'Coberta' },
        { number: '1802', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'], tipologia: 'C', areaApto: '129.00', areaEscada: '13.24', areaTotal: '142.24', numVaga: '24', tipologiaVaga: 'Coberta' },
        { number: '1701', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'], tipologia: 'A', areaApto: '126.26', areaEscada: '15.95', areaTotal: '142.21', numVaga: '12', tipologiaVaga: 'Coberta' },
        { number: '1702', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'], tipologia: 'A', areaApto: '126.96', areaEscada: '15.28', areaTotal: '142.24', numVaga: '13', tipologiaVaga: 'Coberta' },
        { number: '1601', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'], tipologia: 'A', areaApto: '126.13', areaEscada: '16.08', areaTotal: '142.21', numVaga: '11', tipologiaVaga: 'Coberta' },
        { number: '1602', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'], tipologia: 'A', areaApto: '126.96', areaEscada: '15.28', areaTotal: '142.24', numVaga: '14', tipologiaVaga: 'Coberta' },
        { number: '1501', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'], tipologia: 'A', areaApto: '127.13', areaEscada: '15.08', areaTotal: '142.21', numVaga: '10', tipologiaVaga: 'Coberta' },
        { number: '1502', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'], tipologia: 'A', areaApto: '126.96', areaEscada: '15.28', areaTotal: '142.24', numVaga: '11', tipologiaVaga: 'Coberta' },
        { number: '1401', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'], tipologia: 'C', areaApto: '128.00', areaEscada: '14.21', areaTotal: '142.21', numVaga: '21', tipologiaVaga: 'Coberta' },
        { number: '1402', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'], tipologia: 'C', areaApto: '129.00', areaEscada: '13.24', areaTotal: '142.24', numVaga: '22', tipologiaVaga: 'Coberta' },
        // ... até 1802
      ],
      // 1901 até 2302
      [
        { number: '2301', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'], tipologia: 'D', areaApto: '126.00', areaEscada: '16.21', areaTotal: '142.21', numVaga: '27', tipologiaVaga: 'Coberta' },
        { number: '2302', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'], tipologia: 'D', areaApto: '127.00', areaEscada: '15.24', areaTotal: '142.24', numVaga: '28', tipologiaVaga: 'Coberta' },
        { number: '2201', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'], tipologia: 'A', areaApto: '126.26', areaEscada: '15.95', areaTotal: '142.21', numVaga: '12', tipologiaVaga: 'Coberta' },
        { number: '2202', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'], tipologia: 'A', areaApto: '126.96', areaEscada: '15.28', areaTotal: '142.24', numVaga: '13', tipologiaVaga: 'Coberta' },
        { number: '2101', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'], tipologia: 'A', areaApto: '126.13', areaEscada: '16.08', areaTotal: '142.21', numVaga: '11', tipologiaVaga: 'Coberta' },
        { number: '2102', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'], tipologia: 'A', areaApto: '126.96', areaEscada: '15.28', areaTotal: '142.24', numVaga: '14', tipologiaVaga: 'Coberta' },
        { number: '2001', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'], tipologia: 'A', areaApto: '127.13', areaEscada: '15.08', areaTotal: '142.21', numVaga: '10', tipologiaVaga: 'Coberta' },
        { number: '2002', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'], tipologia: 'A', areaApto: '126.96', areaEscada: '15.28', areaTotal: '142.24', numVaga: '11', tipologiaVaga: 'Coberta' },
        { number: '1901', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'], tipologia: 'B', areaApto: '130.00', areaEscada: '12.21', areaTotal: '142.21', numVaga: '17', tipologiaVaga: 'Coberta' },
        { number: '1902', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'], tipologia: 'D', areaApto: '127.00', areaEscada: '15.24', areaTotal: '142.24', numVaga: '26', tipologiaVaga: 'Coberta' },
        // ... até 2302
      ],
      // 2401 até 2802
      [
        // ... até 2802
        { number: '2801', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/215-inferior.png', '../../assets/imgs plantas-aptos/215-superior.png'], tipologia: 'E', areaApto: '124.00', areaEscada: '18.21', areaTotal: '142.21', numVaga: '31', tipologiaVaga: 'Coberta' },
        { number: '2802', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/215-inferior.png', '../../assets/imgs plantas-aptos/215-superior.png'], tipologia: 'E', areaApto: '125.00', areaEscada: '17.24', areaTotal: '142.24', numVaga: '32', tipologiaVaga: 'Coberta' },
        { number: '2701', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'], tipologia: 'A', areaApto: '126.26', areaEscada: '15.95', areaTotal: '142.21', numVaga: '12', tipologiaVaga: 'Coberta' },
        { number: '2702', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'], tipologia: 'A', areaApto: '126.96', areaEscada: '15.28', areaTotal: '142.24', numVaga: '13', tipologiaVaga: 'Coberta' },
        { number: '2601', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'], tipologia: 'A', areaApto: '126.13', areaEscada: '16.08', areaTotal: '142.21', numVaga: '11', tipologiaVaga: 'Coberta' },
        { number: '2602', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'], tipologia: 'A', areaApto: '126.96', areaEscada: '15.28', areaTotal: '142.24', numVaga: '14', tipologiaVaga: 'Coberta' },
        { number: '2501', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'], tipologia: 'A', areaApto: '127.13', areaEscada: '15.08', areaTotal: '142.21', numVaga: '10', tipologiaVaga: 'Coberta' },
        { number: '2502', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'], tipologia: 'A', areaApto: '126.96', areaEscada: '15.28', areaTotal: '142.24', numVaga: '11', tipologiaVaga: 'Coberta' },
        { number: '2401', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/122-01.png'], tipologia: 'E', areaApto: '124.00', areaEscada: '18.21', areaTotal: '142.21', numVaga: '29', tipologiaVaga: 'Coberta' },
        { number: '2402', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/122-02.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-ampliada.png', '../../assets/imgs plantas-aptos/122-02-suitemaster-office.png'], tipologia: 'E', areaApto: '125.00', areaEscada: '17.24', areaTotal: '142.24', numVaga: '30', tipologiaVaga: 'Coberta' },
      ],
    ],
    posterior: [
      // 403 até 804
      [
        { number: '804', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'], tipologia: 'A', areaApto: '121.49', areaEscada: '20.75', areaTotal: '142.24', numVaga: '36', tipologiaVaga: 'Coberta' },
        { number: '803', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'], tipologia: 'A', areaApto: '120.45', areaEscada: '21.76', areaTotal: '142.21', numVaga: '35', tipologiaVaga: 'Coberta' },
        { number: '704', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'], tipologia: 'A', areaApto: '126.26', areaEscada: '15.95', areaTotal: '142.21', numVaga: '12', tipologiaVaga: 'Coberta' },
        { number: '703', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'], tipologia: 'A', areaApto: '126.96', areaEscada: '15.28', areaTotal: '142.24', numVaga: '13', tipologiaVaga: 'Coberta' },
        { number: '604', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'], tipologia: 'A', areaApto: '126.13', areaEscada: '16.08', areaTotal: '142.21', numVaga: '11', tipologiaVaga: 'Coberta' },
        { number: '603', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'], tipologia: 'A', areaApto: '126.96', areaEscada: '15.28', areaTotal: '142.24', numVaga: '14', tipologiaVaga: 'Coberta' },
        { number: '504', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'], tipologia: 'A', areaApto: '127.13', areaEscada: '15.08', areaTotal: '142.21', numVaga: '10', tipologiaVaga: 'Coberta' },
        { number: '503', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'], tipologia: 'A', areaApto: '126.96', areaEscada: '15.28', areaTotal: '142.24', numVaga: '11', tipologiaVaga: 'Coberta' },
        { number: '404', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'], tipologia: 'A', areaApto: '121.49', areaEscada: '20.75', areaTotal: '142.24', numVaga: '34', tipologiaVaga: 'Coberta' },
        { number: '403', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'], tipologia: 'A', areaApto: '120.45', areaEscada: '21.76', areaTotal: '142.21', numVaga: '33', tipologiaVaga: 'Coberta' },
        // ... até 804
      ],
      // 903 até 1304
      [
        { number: '1304', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'], tipologia: 'B', areaApto: '131.00', areaEscada: '11.24', areaTotal: '142.24', numVaga: '40', tipologiaVaga: 'Coberta' },
        { number: '1303', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'], tipologia: 'B', areaApto: '130.00', areaEscada: '12.21', areaTotal: '142.21', numVaga: '39', tipologiaVaga: 'Coberta' },
        { number: '1204', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'], tipologia: 'A', areaApto: '126.26', areaEscada: '15.95', areaTotal: '142.21', numVaga: '12', tipologiaVaga: 'Coberta' },
        { number: '1203', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'], tipologia: 'A', areaApto: '126.96', areaEscada: '15.28', areaTotal: '142.24', numVaga: '13', tipologiaVaga: 'Coberta' },
        { number: '1104', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'], tipologia: 'A', areaApto: '126.13', areaEscada: '16.08', areaTotal: '142.21', numVaga: '11', tipologiaVaga: 'Coberta' },
        { number: '1103', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'], tipologia: 'A', areaApto: '126.96', areaEscada: '15.28', areaTotal: '142.24', numVaga: '14', tipologiaVaga: 'Coberta' },
        { number: '1004', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'], tipologia: 'A', areaApto: '127.13', areaEscada: '15.08', areaTotal: '142.21', numVaga: '10', tipologiaVaga: 'Coberta' },
        { number: '1003', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'], tipologia: 'A', areaApto: '126.96', areaEscada: '15.28', areaTotal: '142.24', numVaga: '11', tipologiaVaga: 'Coberta' },
        { number: '904', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'], tipologia: 'B', areaApto: '131.00', areaEscada: '11.24', areaTotal: '142.24', numVaga: '38', tipologiaVaga: 'Coberta' },
        { number: '903', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'], tipologia: 'B', areaApto: '130.00', areaEscada: '12.21', areaTotal: '142.21', numVaga: '37', tipologiaVaga: 'Coberta' },
        // ... até 1304
      ],
      // 1403 até 1804
      [
        { number: '1804', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'], tipologia: 'C', areaApto: '129.00', areaEscada: '13.24', areaTotal: '142.24', numVaga: '44', tipologiaVaga: 'Coberta' },
        { number: '1803', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'], tipologia: 'C', areaApto: '128.00', areaEscada: '14.21', areaTotal: '142.21', numVaga: '43', tipologiaVaga: 'Coberta' },
        { number: '1704', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'], tipologia: 'A', areaApto: '126.26', areaEscada: '15.95', areaTotal: '142.21', numVaga: '12', tipologiaVaga: 'Coberta' },
        { number: '1703', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'], tipologia: 'A', areaApto: '126.96', areaEscada: '15.28', areaTotal: '142.24', numVaga: '13', tipologiaVaga: 'Coberta' },
        { number: '1604', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'], tipologia: 'A', areaApto: '126.13', areaEscada: '16.08', areaTotal: '142.21', numVaga: '11', tipologiaVaga: 'Coberta' },
        { number: '1603', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'], tipologia: 'A', areaApto: '126.96', areaEscada: '15.28', areaTotal: '142.24', numVaga: '14', tipologiaVaga: 'Coberta' },
        { number: '1504', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'], tipologia: 'A', areaApto: '127.13', areaEscada: '15.08', areaTotal: '142.21', numVaga: '10', tipologiaVaga: 'Coberta' },
        { number: '1503', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'], tipologia: 'A', areaApto: '126.96', areaEscada: '15.28', areaTotal: '142.24', numVaga: '11', tipologiaVaga: 'Coberta' },
        { number: '1404', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'], tipologia: 'C', areaApto: '129.00', areaEscada: '13.24', areaTotal: '142.24', numVaga: '42', tipologiaVaga: 'Coberta' },
        { number: '1403', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'], tipologia: 'C', areaApto: '128.00', areaEscada: '14.21', areaTotal: '142.21', numVaga: '41', tipologiaVaga: 'Coberta' },
        // ... até 1804
      ],
      // 1903 até 2304
      [
        { number: '2304', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'], tipologia: 'D', areaApto: '127.00', areaEscada: '15.24', areaTotal: '142.24', numVaga: '48', tipologiaVaga: 'Coberta' },
        { number: '2303', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'], tipologia: 'D', areaApto: '126.00', areaEscada: '16.21', areaTotal: '142.21', numVaga: '47', tipologiaVaga: 'Coberta' },
        { number: '2204', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'], tipologia: 'A', areaApto: '126.26', areaEscada: '15.95', areaTotal: '142.21', numVaga: '12', tipologiaVaga: 'Coberta' },
        { number: '2203', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'], tipologia: 'A', areaApto: '126.96', areaEscada: '15.28', areaTotal: '142.24', numVaga: '13', tipologiaVaga: 'Coberta' },
        { number: '2104', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'], tipologia: 'A', areaApto: '126.13', areaEscada: '16.08', areaTotal: '142.21', numVaga: '11', tipologiaVaga: 'Coberta' },
        { number: '2103', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'], tipologia: 'A', areaApto: '126.96', areaEscada: '15.28', areaTotal: '142.24', numVaga: '14', tipologiaVaga: 'Coberta' },
        { number: '2004', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'], tipologia: 'A', areaApto: '127.13', areaEscada: '15.08', areaTotal: '142.21', numVaga: '10', tipologiaVaga: 'Coberta' },
        { number: '2003', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'], tipologia: 'A', areaApto: '126.96', areaEscada: '15.28', areaTotal: '142.24', numVaga: '11', tipologiaVaga: 'Coberta' },
        { number: '1904', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'], tipologia: 'D', areaApto: '127.00', areaEscada: '15.24', areaTotal: '142.24', numVaga: '46', tipologiaVaga: 'Coberta' },
        { number: '1903', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'], tipologia: 'D', areaApto: '126.00', areaEscada: '16.21', areaTotal: '142.21', numVaga: '45', tipologiaVaga: 'Coberta' },
        // ... até 2304
      ],
      // 2403 até 2804
      [
        { number: '2804', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/170-inferior.png', '../../assets/imgs plantas-aptos/170-superior.png'], tipologia: 'E', areaApto: '125.00', areaEscada: '17.24', areaTotal: '142.24', numVaga: '52', tipologiaVaga: 'Coberta' },
        { number: '2803', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/170-inferior.png', '../../assets/imgs plantas-aptos/170-superior.png'], tipologia: 'E', areaApto: '124.00', areaEscada: '18.21', areaTotal: '142.21', numVaga: '51', tipologiaVaga: 'Coberta' },
        { number: '2704', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'], tipologia: 'A', areaApto: '126.26', areaEscada: '15.95', areaTotal: '142.21', numVaga: '12', tipologiaVaga: 'Coberta' },
        { number: '2703', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'], tipologia: 'A', areaApto: '126.96', areaEscada: '15.28', areaTotal: '142.24', numVaga: '13', tipologiaVaga: 'Coberta' },
        { number: '2604', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'], tipologia: 'A', areaApto: '126.13', areaEscada: '16.08', areaTotal: '142.21', numVaga: '11', tipologiaVaga: 'Coberta' },
        { number: '2603', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'], tipologia: 'A', areaApto: '126.96', areaEscada: '15.28', areaTotal: '142.24', numVaga: '14', tipologiaVaga: 'Coberta' },
        { number: '2504', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'], tipologia: 'A', areaApto: '127.13', areaEscada: '15.08', areaTotal: '142.21', numVaga: '10', tipologiaVaga: 'Coberta' },
        { number: '2503', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'], tipologia: 'A', areaApto: '126.96', areaEscada: '15.28', areaTotal: '142.24', numVaga: '11', tipologiaVaga: 'Coberta' },
        { number: '2404', size: '142,24', imgSrc: ['../../assets/imgs plantas-aptos/91-04.png'], tipologia: 'E', areaApto: '125.00', areaEscada: '17.24', areaTotal: '142.24', numVaga: '50', tipologiaVaga: 'Coberta' },
        { number: '2403', size: '142,21', imgSrc: ['../../assets/imgs plantas-aptos/91-03.png'], tipologia: 'E', areaApto: '124.00', areaEscada: '18.21', areaTotal: '142.21', numVaga: '49', tipologiaVaga: 'Coberta' },
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
