import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';
import {Subject, Subscription} from 'rxjs';
import {Category} from '../../models/CategoryI.model';
import {environment} from '../../../environments/environment';
import {catchError, map, tap} from 'rxjs/operators';

const basePathPr = environment.api_url + '/products';
const basePathcarM = environment.api_url + '/carModels';
const basePathPa = environment.api_url + '/parts';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    productList: any[];
    partList: any[];
    productSubject = new Subject<any[]>();
    partSubject = new Subject<any[]>();

    HttpOptions = {
        headers: new HttpHeaders({
            'Content-type': 'application/json'
        })
    };

    emitProduct() {
        this.productSubject.next(this.productList.slice());
    }

    emitPart() {
        this.partSubject.next(this.partList.slice());
    }
    constructor(private httpClient: HttpClient,
                private authService: AuthService) {}


    getAllProductPartForSpecificCategory(name: string) {
        return this.httpClient.get<any[]>(`${basePathPa}?categories=${name}`, this.HttpOptions)
            .pipe(
                tap( response => {
                    this.productList = response;
                    this.emitProduct();
                }),
                catchError(this.authService.errorHandler)
            );
    }
    getAllProductForSpecificCategory(name: string) {
        return this.httpClient.get<any[]>(`${basePathPr}?categories=${name}`, this.HttpOptions)
            .pipe(
                map( response => {
                    this.partList = response;
                    this.emitPart();
                }),
                catchError(this.authService.errorHandler)
            );
    }

    mergePartAndProduct(arr1: Array<any>, arr2: Array<any>) {
        const subject = new Subject<any[]>();
        subject.next([...arr1, ...arr2]);
        return subject;
    }

    getSingleProduct(id: number) {
        return this.httpClient.get(`${basePathPa}/${id}`, this.HttpOptions)
            .pipe(
                tap( response => {
                    console.log(response);
                }),
                catchError(this.authService.errorHandler)
            );
    }

    getCarModelsDetails(id: number) {
        return this.httpClient.get(`${basePathcarM}/${id}`, this.HttpOptions)
            .pipe(
                tap(response => {
                    console.log(response);
                }),
                catchError(this.authService.errorHandler)
            );
    }
}
