export class OrderItemInterface {

    constructor(public name: string,
                public images: string,
                public orderId: number,
                public price: number,
                public quantity: number,
                public productId: number,
                public id?: number) {
    }
}
