import {OrderItemInterface} from './orderItem.interface';

export class OrderInterface {

    constructor(public orderStatus: string,
                public trackingNumber: string,
                public orderDate: Date,
                public amountTTC: number,
                public paiementMethod: number,
                public createdAt: Date,
                public deliveryMode: number,
                public deliveryDateAchieved: Date,
                public addressID: number,
                public userId: number,
                public orderItems: OrderItemInterface[],
                public id: number) {
    }
}
