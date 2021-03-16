import { Injectable } from '@angular/core';
import {setStorage} from '../../../utils/storage.utils';


@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private setTrainer(trainer: any){
    setStorage('trainer', trainer);
  }

  login(trainerName: string): boolean{
    this.setTrainer(trainerName);
    return true;
  }
}
