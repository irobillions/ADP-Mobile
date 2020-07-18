import { Injectable } from "@angular/core";
import { OrderInterface } from "../../models/order.interface";
import { User } from "../../models/user.model";
import { Subject } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { UserService } from "../auth/user.service";
import { AlertController, ToastController } from "@ionic/angular";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";

const basePath = "http://localhost:5000/clients/order";

@Injectable({
  providedIn: "root",
})
export class OrderService {
  user: User;
  Orders: OrderInterface[] = [];
  OrderSubject = new Subject<OrderInterface[]>();
  HttpOptions = {
    headers: new HttpHeaders({
      "Content-type": "application/json",
    }),
  };

  emitAddress() {
    this.OrderSubject.next(this.Orders.slice());
  }

  constructor(
    private userService: UserService,
    private alertController: AlertController,
    private toastController: ToastController,
    private httpClient: HttpClient,
    private authService: AuthService
  ) {
    this.user = this.userService.getAuthenticatedUser();
    this.getAllUserOrders().subscribe(
      () => {
        console.log("Orders all charged");
      },
      (error) => {
        console.log("Orders failed to charge" + error);
        this.presentToast("orders charged failed" + error, 2000, "success");
      }
    );
  }

  async presentToast(msg, dur, clr) {
    const toast = await this.toastController.create({
      message: msg,
      duration: dur,
      color: clr,
    });
    await toast.present();
  }

  async presentAlert(error) {
    const alert = await this.alertController.create({
      header: "Error",
      // tslint:disable-next-line:max-line-length
      message:
        "Error occured when adding new address! Sorry" +
        '<ion-icon color="warning" ios="sad-outline" md="sad-sharp"></ion-icon>' +
        "<br>" +
        " You can retry later",
      buttons: [
        {
          text: "Okay",
          role: "cancel",
          cssClass: "secondary",
          handler: (err) => {
            console.log("Error to add new address" + err);
          },
        },
      ],
    });
    await alert.present();
  }

  getAllUserOrders() {
    return this.httpClient
      .get<OrderInterface[]>(
        `${basePath}?userId=${this.user.id}`,
        this.HttpOptions
      )
      .pipe(
        map((response) => {
          this.Orders = response;
          console.log(response);
          this.emitAddress();
        }),
        catchError(this.authService.errorHandler)
      );
  }

  getSpecificOrder(id: number) {
    return this.httpClient
      .get<OrderInterface>(
        `${basePath}/${id}?_embed=orderItems`,
        this.HttpOptions
      )
      .pipe(
        map((response) => {
          console.log(response);
          return response;
        }),
        catchError(this.authService.errorHandler)
      );
  }
}
