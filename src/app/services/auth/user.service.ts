import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from './auth.service';
import {Address} from '../../models/address.model';
import {Subject} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, retry, tap} from 'rxjs/operators';
import {AlertController, ToastController} from '@ionic/angular';
import {User} from '../../models/user.model';

const basePath = environment.api_url + '/address';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    user: User;
    userAddress: Address[] = [];
    AddressSubject = new Subject<Address[]>();
    HttpOptions = {
        headers: new HttpHeaders({
            'Content-type': 'application/json'
        })
    };

    emitAddress() {
        this.AddressSubject.next(this.userAddress.slice());
    }

    constructor(private authService: AuthService,
                private httpClient: HttpClient,
                private alertController: AlertController,
                private toastController: ToastController) {
        this.user = this.getAuthenticatedUser();
        this.getAllUserAddress(this.user.id).subscribe(
            () => {
                console.log('succedded loading address');
            }, error => {
                console.log('failed to load address: ' + error);
            }
        );
    }

    async presentToast(msg, dur, clr) {
        const toast = await this.toastController.create({
            message: msg,
            duration: dur,
            color: clr
        });
        await toast.present();
    }

    async presentAlert(error) {
        const alert = await this.alertController.create({
            header: 'Error',
            // tslint:disable-next-line:max-line-length
            message: 'Error occured when adding new address! Sorry' + '<ion-icon color="warning" ios="sad-outline" md="sad-sharp"></ion-icon>' +
                '<br>' + ' You can retry later',
            buttons: [
                {
                    text: 'Okay',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (err) => {
                        console.log('Error to add new address' + err);
                    }
                }
            ]
        });
        await alert.present();
    }

    getAuthenticatedUser() {
        return JSON.parse(this.authService.getAuthenticateUser());
    }

    SaveNewAddressToServer(address: Address) {
        return this.httpClient.post<Address>(basePath, JSON.stringify(address), this.HttpOptions)
            .pipe(
                retry(2),
                tap(response => {
                        console.log('new address added' + response.id);
                    },
                    err => {
                        console.log('error adding address' + err);
                    }),
                catchError(this.authService.errorHandler)
            );
    }

    createNewAddress(address: Address) {
        this.SaveNewAddressToServer(address).subscribe(result => {
                this.userAddress.push(result);
                this.emitAddress();
                this.presentToast('added new address', 2000, 'success').then(_ => {
                    console.log('creating adr succeed');
                });
            },
            error => {
                this.presentToast('failed adding new address' + error, 2000, 'danger').then(_ => {
                    console.log('creating adr failed' + error);
                });

            });
    }

    removeAddress(address: Address) {
        return this.httpClient.delete(`${basePath}/${address.id}`)
            .pipe(tap(_ => {
                    const AddressToRemove = this.userAddress.findIndex(
                        (addressEl) => {
                            if (addressEl === address) {
                                return true;
                            }
                        });
                    this.userAddress.splice(AddressToRemove, 1);
                    this.emitAddress();
                    this.presentToast('address deleted', 2000, 'success').then(() => {
                        console.log('address deleted' + address.id);
                    });
                },
                err => {
                    this.presentToast('error occurs when deleting' + err, 2000, 'danger').then(_ => {
                        console.log('address deleted error' + err);
                    });
                }),
                catchError(this.authService.errorHandler)
            );

    }

    EditAddress(addressId: number, newAddress: Address) {
        return this.httpClient.put(`${basePath}/${addressId}`, newAddress, this.HttpOptions)
            .pipe(
                map(_ => {
                    const AddressIndexToModify = this.userAddress.findIndex(
                        (addressEl) => {
                            if (addressEl.id === addressId) {
                                return true;
                            }
                        }
                    );
                    console.log(AddressIndexToModify);
                    newAddress.id = addressId;
                    this.userAddress.splice(AddressIndexToModify, 1, newAddress);
                    this.emitAddress();

                }),
                catchError(this.authService.errorHandler)
            );
    }

    getAllUserAddress(userId: number) {
        return this.httpClient.get<Address[]>(`${basePath}?userId=${userId}`, this.HttpOptions).pipe(
            map( response => {
                this.userAddress = response;
                console.log(response);
                this.emitAddress();
            }),
            catchError(this.authService.errorHandler)
        );

    }
    getSingleAddress(id: number) {
        return this.httpClient.get<Address>(`${basePath}/${id}`, this.HttpOptions).pipe(
            map( response => {
                return response;
            }),
            catchError(this.authService.errorHandler)
        );
    }
}
