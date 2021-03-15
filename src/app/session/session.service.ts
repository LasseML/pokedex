import {Injectable} from '@angular/core';
import {getStorage} from '../utils/storage.utils';


@Injectable({
  providedIn: 'root'
})

export class SessionService {
  active(): boolean {
    const trainer = getStorage('trainer');
    return Boolean(trainer);
  }

}
