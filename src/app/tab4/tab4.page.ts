import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private alertCtrl: AlertController, private toastCtrl: ToastController) { }

  ngOnInit() { 
  
  }

  async showAdd(){
    const alert = await this.alertCtrl.create({
      header: 'O que deseja fazer?',
      inputs: [
        {
          name: 'taskToDo',
          type: 'text'
       
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'Secondary',
          handler:() =>{
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Adcionar',
          handler: (form) => {
            this.addTaskToDo(form.taskToDo);
          }
        }
      ]
  });

  await alert.present();
}
  async addTaskToDo(TarefaAFazer: string){
    if(TarefaAFazer.trim().length < 1) {
      const toast = await this.toastCtrl.create({
        message: 'Informe o que deseja fazer!',
        duration: 2000,
        position: 'top'
      });
      toast.present();
      return;
    }
  }
}
