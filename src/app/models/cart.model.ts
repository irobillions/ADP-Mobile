import {ItemCartModel} from './Item-cart.model';

export class CartModel {

    constructor(public cartItems: ItemCartModel[],
                public cartItemCount: number,
                public cartTotalAmount: number) {}
}
