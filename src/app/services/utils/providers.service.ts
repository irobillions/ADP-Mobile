import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProvidersService {
    obj: any = null;

    clear() {
        this.obj = null;
    }
}
