import { Component } from '@angular/core';
import { IAtores } from '../model/IAtores';
import { NavigationExtras, Router} from '@angular/router'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public router : Router) {}

  listaAtores: IAtores[] = [
    {
      nome: 'Madelyn Cline',
      data: '21/12/1997',
      local: 'Charleston, South Carolina, USA',
      foto: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/9pVpUGJdOEmQKhJy1IPqGoVB3Q7.jpg',
      genero: 'Feminino',
      pagina: '/Madelyn',
      favorito: false
    },
    {
      nome: 'Pedro Pascal',
      data: '02/04/1975',
      local: 'Santiago, Chile',
      foto: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/dBOrm29cr7NUrjiDQMTtrTyDpfy.jpg',
      genero: 'Maculino',
      pagina: '/Pedro',
      favorito: false
    },
    {
      nome: 'Christian Bale',
      data: '30/01/1974',
      local: 'Haverfordwest, Pembrokeshire, Wales, UK ',
      foto: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/qCpZn2e3dimwbryLnqxZuI88PTi.jpg',
      genero: 'Maculino',
      pagina: '/Christian',
      favorito: false
    },
    {
      nome: 'Ryan Reynolds',
      data: '23/10/1976',
      local: 'Vancouver, British Columbia, Canada ',
      foto: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/4SYTH5FdB0dAORV98Nwg3llgVnY.jpg',
      genero: 'Maculino',
      pagina: '/Ryan',
      favorito: false
    },
    {
      nome: 'LeBron James',
      data: '30/12/1984',
      local: 'Akron, Ohio, USA',
      foto: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/rmIYKVdYT60zfsqfjNuB71f1y82.jpg',
      genero: 'Maculino',
      pagina: '/Lebron',
      favorito: false
    },
  ]
  exibirAtor(Atores: IAtores){
    const navigationExtras: NavigationExtras = {state:{paramAtor:Atores}};   
    this.router.navigate(['ator-detalhe'],navigationExtras);   
   }
}
