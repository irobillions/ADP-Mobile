import { Injectable } from '@angular/core' ;
import {BehaviorSubject} from 'rxjs';
import {element} from 'protractor';
import {ToastController} from '@ionic/angular';
import {ItemCartModel} from '../../models/Item-cart.model';

export interface Product {
    id: number;
    name: string;
    price: number;
    amount: number;
}
@Injectable({
    providedIn: 'root'
})
export class CartService {
    total: number;
    data: Product[] = [
        {id: 0, name: 'Pizza Salami', price: 8.99, amount: 1},
        {id: 1, name: 'Pizza Classic', price: 7.99, amount: 1},
        {id: 2, name: 'Pizza Bread', price: 5.99, amount: 1},
        {id: 3, name: 'Pizza Salami', price: 4.99, amount: 1},
        {id: 4, name: 'Salad ', price: 6.99, amount: 1}
    ];
    private cart: ItemCartModel[] = [];
    private cartItemCount = new BehaviorSubject(0);
    constructor(private toastController: ToastController) {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }

   async saveCart(cart) {
        await localStorage.setItem('cart', JSON.stringify(cart));
    }
    async presentToast(msg, dur, clr) {
        const toast = await this.toastController.create({
            message: msg,
            duration: dur,
            color: clr
        });
        await toast.present();
    }
    getProducts() {
        return this.data;
    }

    async getCart() {
      this.cart = await JSON.parse(localStorage.getItem('cart'));
      this.cart.forEach(( el: ItemCartModel) => {
          this.total += el.deliveryFeed + (el.qty * el.amount); // revoir ce calcul
      });
      return this.cart;
    }

    getCartItemCount() {
        return this.cartItemCount; // a sauvegarder aussi
    }

    async addProduct(product: Product, quantity: number) {
        try {
            let data: ItemCartModel[];
            let added = false;

            data = JSON.parse(localStorage.getItem('cart'));
            if (data.length === 0) {
                data.push({
                    deliveryFeed: 0,
                    item: product,
                    qty: quantity,
                    amount: Number(product.price) * quantity
                });
                added = true;
                this.cartItemCount.next(this.cartItemCount.value + 1);
            } else {
                // tslint:disable-next-line:prefer-for-of
                for (let i = 0; i < data.length; i++) {
                    const el: ItemCartModel = data[i];
                    if (product.id === el.item.id) {
                        // le panier contient déjà cette article
                        el.qty += 1;
                        el.amount += Number(product.price);
                        added = true;
                    }
                }
            }
            if (!added) {
                // le panier n'est pas vide et ne contient pas l'article
                data.push({
                    deliveryFeed: 0,
                    item: product,
                    qty: quantity,
                    amount: Number(product.price) * quantity
                });
                this.cartItemCount.next(this.cartItemCount.value + 1);
            }
            await localStorage.setItem('cart', JSON.stringify(data));
            this.presentToast('Votre panier a été mis à jour', 1500, 'success');
        } catch (e) {
            const myData: ItemCartModel[] = [];
            console.log('error', e);
            if (e.code === 2) {
                myData.push({
                    deliveryFeed: 0,
                    item: product,
                    qty: quantity,
                    amount: Number(product.price) * quantity
                });
                await localStorage.setItem('cart', JSON.stringify(myData));
                this.presentToast('Votre panier a été mis à jour', 1500, 'success');
            }
        }
    }

    async decreaseProductAmount(product) {
        for (const [index, p] of this.cart.entries()) {
            if (p.item.id === product.item.id) {
                console.log(p, '/', product);
                if (p.qty === 0) {
                    this.cart.splice(index, 1);
                    await this.cartItemCount.next(this.cartItemCount.value - 1);
                } else {
                    p.qty -= 1;
                    p.amount = p.amount - Number(product.item.price);
                    console.log(p.amount);
                }
            }
        }
    }

    async increaseProductAmount(product) {
        for (const [index, p] of this.cart.entries()) {
            if (p.item.id === product.item.id) {
                p.qty += 1;
                p.amount += Number(product.item.price);
            }
        }
    }
   async remove(index: number, item: ItemCartModel) {
        const myTotal: number = (item.qty * item.amount) + item.deliveryFeed;
        this.cart.splice(index, 1);
        this.cartItemCount.next(this.cartItemCount.value - 1);
        await localStorage.setItem('cart', JSON.stringify(this.cart));
        this.total -= myTotal;
    }
}
