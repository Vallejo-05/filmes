import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';
import { NavigationExtras, Router} from '@angular/router'
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public router: Router,
              public AlertController: AlertController,
              public ToastController: ToastController) {}

  listaFilmes: IFilme[] = [
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h50m',
      classificacao: 6.0,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/mortal-kombat',
      favorito: false
    },
    {
      nome: 'Vingadores: Ultimato (2019)',
      lancamento: '25/04/2019 (BR)',
      duracao: '3h01m',
      classificacao: 8.6,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg',
      generos: ['Aventura', 'Ficção científica', 'Ação'],
      pagina: '/avengers',
      favorito: false
    },
    {
      nome: 'Super Mario Bros. O Filme (2023)',
      lancamento: '05/04/2023 (BR)',
      duracao: '1h32m',
      classificacao: 7.3,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/i9XdxHsFrcqLkRWSF1coOHo4R39.jpg',
      generos: ['Animação', 'Aventura', 'Família', 'Fantasia', 'Comédia'],
      pagina: '/mario',
      favorito: false
    },
    {
      nome: 'Homem-Aranha: Sem Volta Para Casa (2021)',
      lancamento: '16/12/2021 (BR)',
      duracao: '2h28m',
      classificacao: 8.2,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg',
      generos: ['Ação', 'Aventura', 'Ficção científica'],
      pagina: '/homemaranha',
      favorito: false
    },
    {
      nome: 'Superbad: É Hoje (2007)',
      lancamento: '02/10/2007 (BR)',
      duracao: '1h53m',
      classificacao: 7.6,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aqr4CdX6eeA5UkVAJzKZMs7FeEw.jpg',
      generos: ['Comédia'],
      pagina: '/superbad',
      favorito: false
    }
  ]
  exibirFilme(filme: IFilme){
   const navigationExtras: NavigationExtras = {state:{paramFilme:filme}};   
   this.router.navigate(['filme-detalhe'],navigationExtras);   
  }
  async exibirAlertaFavorito(filme: IFilme) {
    const alert = await this.AlertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            filme.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            filme.favorito=true;
            this.apresentarToast(filme);
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast(filme:IFilme) {
    const toast = await this.ToastController.create({
      message: 'Filme adicionado aos favoritos...',
      duration: 3000,
      color: 'success',
      buttons: [
        {
          text: 'Desfazer',
          handler: () => {
            filme.favorito=false;
          }
        }
      ]
    });
    toast.present();
  }
}


