import { Injectable } from '@angular/core';
import { Images } from 'src/app/utils/image-enum.utils';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor() { }

  public get Image(): typeof Images {
    return Images;
  }
}

