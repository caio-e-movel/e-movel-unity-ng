import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-apto',
  templateUrl: './apto.component.html',
  styleUrls: ['./apto.component.css'],
})
export class AptoComponent {
  fontStyleControl = new FormControl('');
  fontStyle?: string;
  selectedView: string = 'frontal'; // "frontal" por padrão
  selectedApto: any; // Este será um objeto contendo as informações do apartamento selecionado
  currentPage: number = 1;

  apartments: any = {
    frontal: [
      [
        { number: '801', size: '142,21', imgSrc: '../../assets/imgs_apto/planta-801.png', tipologia: 'A', areaApto: '120.45', areaEscada: '21.76', areaTotal: '142.21', numVaga: '15', tipologiaVaga: 'Coberta' },
        { number: '802', size: '142,24', imgSrc: '../../assets/imgs_apto/planta-802.png', tipologia: 'A', areaApto: '121.49', areaEscada: '20.75', areaTotal: '142.24', numVaga: '16', tipologiaVaga: 'Coberta' },
        { number: '701', size: '142,21', imgSrc: '../../assets/imgs_apto/planta-701.png', tipologia: 'A', areaApto: '126.26', areaEscada: '15.95', areaTotal: '142.21', numVaga: '12', tipologiaVaga: 'Coberta' },
        { number: '702', size: '142,24', imgSrc: '../../assets/imgs_apto/planta-702.png', tipologia: 'A', areaApto: '126.96', areaEscada: '15.28', areaTotal: '142.24', numVaga: '13', tipologiaVaga: 'Coberta' },
        { number: '601', size: '142,21', imgSrc: '../../assets/imgs_apto/planta-601.png', tipologia: 'A', areaApto: '126.13', areaEscada: '16.08', areaTotal: '142.21', numVaga: '11', tipologiaVaga: 'Coberta' },
        { number: '602', size: '142,24', imgSrc: '../../assets/imgs_apto/planta-602.png', tipologia: 'A', areaApto: '126.96', areaEscada: '15.28', areaTotal: '142.24', numVaga: '14', tipologiaVaga: 'Coberta' },
        { number: '501', size: '142,21', imgSrc: '../../assets/imgs_apto/planta-501.png', tipologia: 'A', areaApto: '127.13', areaEscada: '15.08', areaTotal: '142.21', numVaga: '10', tipologiaVaga: 'Coberta' },
        { number: '502', size: '142,24', imgSrc: '../../assets/imgs_apto/planta-502.png', tipologia: 'A', areaApto: '126.96', areaEscada: '15.28', areaTotal: '142.24', numVaga: '11', tipologiaVaga: 'Coberta' },
        { number: '401', size: '142,21', imgSrc: '../../assets/imgs_apto/planta-401.png', tipologia: 'A', areaApto: '142.21', areaEscada: '0.00', areaTotal: '142.21', numVaga: '01', tipologiaVaga: 'Descoberta' },
        { number: '402', size: '142,24', imgSrc: '../../assets/imgs_apto/planta-402.png', tipologia: 'A', areaApto: '142.24', areaEscada: '0.00', areaTotal: '142.24', numVaga: '02', tipologiaVaga: 'Descoberta' },
      ],
      // 901 até 1302
      [
        { number: '1301', size: '142,21', imgSrc: '../../assets/imgs_apto/planta-1301.png', tipologia: 'B', areaApto: '130.00', areaEscada: '12.21', areaTotal: '142.21', numVaga: '19', tipologiaVaga: 'Coberta' },
        { number: '1302', size: '142,24', imgSrc: '../../assets/imgs_apto/planta-1302.png', tipologia: 'B', areaApto: '131.00', areaEscada: '11.24', areaTotal: '142.24', numVaga: '20', tipologiaVaga: 'Coberta' },
        { number: '901', size: '142,21', imgSrc: '../../assets/imgs_apto/planta-901.png', tipologia: 'B', areaApto: '130.00', areaEscada: '12.21', areaTotal: '142.21', numVaga: '17', tipologiaVaga: 'Coberta' },
        { number: '902', size: '142,24', imgSrc: '../../assets/imgs_apto/planta-902.png', tipologia: 'B', areaApto: '131.00', areaEscada: '11.24', areaTotal: '142.24', numVaga: '18', tipologiaVaga: 'Coberta' },
        // ... até 1302
      ],
      // 1401 até 1802
      [
        { number: '1801', size: '142,21', imgSrc: '../../assets/imgs_apto/planta-1801.png', tipologia: 'C', areaApto: '128.00', areaEscada: '14.21', areaTotal: '142.21', numVaga: '23', tipologiaVaga: 'Coberta' },
        { number: '1802', size: '142,24', imgSrc: '../../assets/imgs_apto/planta-1802.png', tipologia: 'C', areaApto: '129.00', areaEscada: '13.24', areaTotal: '142.24', numVaga: '24', tipologiaVaga: 'Coberta' },
        { number: '1401', size: '142,21', imgSrc: '../../assets/imgs_apto/planta-1401.png', tipologia: 'C', areaApto: '128.00', areaEscada: '14.21', areaTotal: '142.21', numVaga: '21', tipologiaVaga: 'Coberta' },
        { number: '1402', size: '142,24', imgSrc: '../../assets/imgs_apto/planta-1402.png', tipologia: 'C', areaApto: '129.00', areaEscada: '13.24', areaTotal: '142.24', numVaga: '22', tipologiaVaga: 'Coberta' },
        // ... até 1802
      ],
      // 1901 até 2302
      [
        { number: '2301', size: '142,21', imgSrc: '../../assets/imgs_apto/planta-2301.png', tipologia: 'D', areaApto: '126.00', areaEscada: '16.21', areaTotal: '142.21', numVaga: '27', tipologiaVaga: 'Coberta' },
        { number: '2302', size: '142,24', imgSrc: '../../assets/imgs_apto/planta-2302.png', tipologia: 'D', areaApto: '127.00', areaEscada: '15.24', areaTotal: '142.24', numVaga: '28', tipologiaVaga: 'Coberta' },
        { number: '1901', size: '142,21', imgSrc: '../../assets/imgs_apto/planta-1901.png', tipologia: 'D', areaApto: '126.00', areaEscada: '16.21', areaTotal: '142.21', numVaga: '25', tipologiaVaga: 'Coberta' },
        { number: '1902', size: '142,24', imgSrc: '../../assets/imgs_apto/planta-1902.png', tipologia: 'D', areaApto: '127.00', areaEscada: '15.24', areaTotal: '142.24', numVaga: '26', tipologiaVaga: 'Coberta' },
        // ... até 2302
      ],
      // 2401 até 2802
      [
        // ... até 2802
        { number: '2801', size: '142,21', imgSrc: '../../assets/imgs_apto/planta-2801.png', tipologia: 'E', areaApto: '124.00', areaEscada: '18.21', areaTotal: '142.21', numVaga: '31', tipologiaVaga: 'Coberta' },
        { number: '2802', size: '142,24', imgSrc: '../../assets/imgs_apto/planta-2802.png', tipologia: 'E', areaApto: '125.00', areaEscada: '17.24', areaTotal: '142.24', numVaga: '32', tipologiaVaga: 'Coberta' },
        { number: '2401', size: '142,21', imgSrc: '../../assets/imgs_apto/planta-2401.png', tipologia: 'E', areaApto: '124.00', areaEscada: '18.21', areaTotal: '142.21', numVaga: '29', tipologiaVaga: 'Coberta' },
        { number: '2402', size: '142,24', imgSrc: '../../assets/imgs_apto/planta-2402.png', tipologia: 'E', areaApto: '125.00', areaEscada: '17.24', areaTotal: '142.24', numVaga: '30', tipologiaVaga: 'Coberta' },
      ],
    ],
    posterior: [
      // 403 até 804
      [
        { number: '803', size: '142,21', imgSrc: '../../assets/imgs_apto/planta-803.png', tipologia: 'A', areaApto: '120.45', areaEscada: '21.76', areaTotal: '142.21', numVaga: '35', tipologiaVaga: 'Coberta' },
        { number: '804', size: '142,24', imgSrc: '../../assets/imgs_apto/planta-804.png', tipologia: 'A', areaApto: '121.49', areaEscada: '20.75', areaTotal: '142.24', numVaga: '36', tipologiaVaga: 'Coberta' },
        { number: '403', size: '142,21', imgSrc: '../../assets/imgs_apto/planta-403.png', tipologia: 'A', areaApto: '120.45', areaEscada: '21.76', areaTotal: '142.21', numVaga: '33', tipologiaVaga: 'Coberta' },
        { number: '404', size: '142,24', imgSrc: '../../assets/imgs_apto/planta-404.png', tipologia: 'A', areaApto: '121.49', areaEscada: '20.75', areaTotal: '142.24', numVaga: '34', tipologiaVaga: 'Coberta' },
        // ... até 804
      ],
      // 903 até 1304
      [
        { number: '1303', size: '142,21', imgSrc: '../../assets/imgs_apto/planta-1303.png', tipologia: 'B', areaApto: '130.00', areaEscada: '12.21', areaTotal: '142.21', numVaga: '39', tipologiaVaga: 'Coberta' },
        { number: '1304', size: '142,24', imgSrc: '../../assets/imgs_apto/planta-1304.png', tipologia: 'B', areaApto: '131.00', areaEscada: '11.24', areaTotal: '142.24', numVaga: '40', tipologiaVaga: 'Coberta' },
        { number: '903', size: '142,21', imgSrc: '../../assets/imgs_apto/planta-903.png', tipologia: 'B', areaApto: '130.00', areaEscada: '12.21', areaTotal: '142.21', numVaga: '37', tipologiaVaga: 'Coberta' },
        { number: '904', size: '142,24', imgSrc: '../../assets/imgs_apto/planta-904.png', tipologia: 'B', areaApto: '131.00', areaEscada: '11.24', areaTotal: '142.24', numVaga: '38', tipologiaVaga: 'Coberta' },
        // ... até 1304
      ],
      // 1403 até 1804
      [
        { number: '1803', size: '142,21', imgSrc: '../../assets/imgs_apto/planta-1803.png', tipologia: 'C', areaApto: '128.00', areaEscada: '14.21', areaTotal: '142.21', numVaga: '43', tipologiaVaga: 'Coberta' },
        { number: '1804', size: '142,24', imgSrc: '../../assets/imgs_apto/planta-1804.png', tipologia: 'C', areaApto: '129.00', areaEscada: '13.24', areaTotal: '142.24', numVaga: '44', tipologiaVaga: 'Coberta' },
        { number: '1403', size: '142,21', imgSrc: '../../assets/imgs_apto/planta-1403.png', tipologia: 'C', areaApto: '128.00', areaEscada: '14.21', areaTotal: '142.21', numVaga: '41', tipologiaVaga: 'Coberta' },
        { number: '1404', size: '142,24', imgSrc: '../../assets/imgs_apto/planta-1404.png', tipologia: 'C', areaApto: '129.00', areaEscada: '13.24', areaTotal: '142.24', numVaga: '42', tipologiaVaga: 'Coberta' },
        // ... até 1804
      ],
      // 1903 até 2304
      [
        { number: '2303', size: '142,21', imgSrc: '../../assets/imgs_apto/planta-2303.png', tipologia: 'D', areaApto: '126.00', areaEscada: '16.21', areaTotal: '142.21', numVaga: '47', tipologiaVaga: 'Coberta' },
        { number: '2304', size: '142,24', imgSrc: '../../assets/imgs_apto/planta-2304.png', tipologia: 'D', areaApto: '127.00', areaEscada: '15.24', areaTotal: '142.24', numVaga: '48', tipologiaVaga: 'Coberta' },
        { number: '1903', size: '142,21', imgSrc: '../../assets/imgs_apto/planta-1903.png', tipologia: 'D', areaApto: '126.00', areaEscada: '16.21', areaTotal: '142.21', numVaga: '45', tipologiaVaga: 'Coberta' },
        { number: '1904', size: '142,24', imgSrc: '../../assets/imgs_apto/planta-1904.png', tipologia: 'D', areaApto: '127.00', areaEscada: '15.24', areaTotal: '142.24', numVaga: '46', tipologiaVaga: 'Coberta' },
        // ... até 2304
      ],
      // 2403 até 2804
      [
        { number: '2803', size: '142,21', imgSrc: '../../assets/imgs_apto/planta-2803.png', tipologia: 'E', areaApto: '124.00', areaEscada: '18.21', areaTotal: '142.21', numVaga: '51', tipologiaVaga: 'Coberta' },
        { number: '2804', size: '142,24', imgSrc: '../../assets/imgs_apto/planta-2804.png', tipologia: 'E', areaApto: '125.00', areaEscada: '17.24', areaTotal: '142.24', numVaga: '52', tipologiaVaga: 'Coberta' },
        { number: '2403', size: '142,21', imgSrc: '../../assets/imgs_apto/planta-2403.png', tipologia: 'E', areaApto: '124.00', areaEscada: '18.21', areaTotal: '142.21', numVaga: '49', tipologiaVaga: 'Coberta' },
        { number: '2404', size: '142,24', imgSrc: '../../assets/imgs_apto/planta-2404.png', tipologia: 'E', areaApto: '125.00', areaEscada: '17.24', areaTotal: '142.24', numVaga: '50', tipologiaVaga: 'Coberta' },
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
  }

  onViewChange(view: string) {
    this.selectedView = view;
    this.currentPage = 1; // Reinicia a página ao alternar a visão
  }

  selectApto(aptoNumber: string) {
    this.selectedApto = aptoNumber;
  }


}
