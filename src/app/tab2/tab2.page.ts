
import { Component } from '@angular/core';
import { ISeries } from '../model/ISeries';
import { NavigationExtras, Router} from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public router : Router,
              public AlertController: AlertController,
              public ToastController: ToastController) {}

  listaSeries: ISeries[] = [
    {
        nome: 'The Last Of Us (2023)',
        lancamento: '15/01/2023',
        temporadas: 1,
        classificacao: 8.8,
        cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
        generos: ['Drama'],
        pagina: '/TheLastOfUs',
        favorito: false
    },
    {
      nome: 'The Boys (2019)',
      lancamento: '26/07/2019',
      temporadas: 3,
      classificacao: 8.5,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jJia5isWjB4wR7cxLMnN7ozLfi4.jpg',
      generos: ['Ficção Científica', 'Fantasia', 'Ação', 'Aventura'],
      pagina: '/TheBoys',
      favorito: false
  },
  {
    nome: 'Family Guy (1999)',
    lancamento: '31/01/1999',
    temporadas: 21,
    classificacao: 7.3,
    cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ntvjuKIBibB5OcTzQguu5gfy91k.jpg',
    generos: ['Animação', 'Comédia'],
    pagina: '/FamilyGuy',
    favorito: false
},
{
  nome: 'Friends (1994)',
  lancamento: '22/09/1994',
  temporadas: 10,
  classificacao: 8.5,
  cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2koX1xLkpTQM4IZebYvKysFW1Nh.jpg',
  generos: ['Drama', 'Comédia'],
  pagina: '/Friends',
  favorito: false
},
{
  nome: 'Modern Family (2009)',
  lancamento: '23/09/2009',
  temporadas: 11,
  classificacao: 7.8,
  cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fu5vEUHgxkAPmX26ISQXqHmlPMq.jpg',
  generos: ['Comédia'],
  pagina: '/Modern Family',
  favorito: false
},
  ];
  exibirSerie(serie: ISeries){
    const navigationExtras: NavigationExtras = {state:{paramSerie:serie}};   
    this.router.navigate(['serie-detalhe'],navigationExtras);   
   }
   async exibirAlertaFavorito(serie: ISeries) {
    const alert = await this.AlertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar a série?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            serie.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            serie.favorito=true;
            this.apresentarToast(serie);
          }
        }
      ]
    });
    await alert.present();
  }



  async apresentarToast(serie:ISeries) {
    const toast = await this.ToastController.create({
      message: 'Série adicionado aos favoritos...',
      duration: 3000,
      color: 'success',
      buttons: [
        {
          text: 'Desfazer',
          handler: () => {
            serie.favorito=false;
          }
        }
      ]
    });
    toast.present();
  }
}
