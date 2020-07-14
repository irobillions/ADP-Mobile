export class Address {

    constructor(public firstName: string,
                public lastName: string,
                public city: string,
                public country: string,
                public zipCode: string,
                public street: string,
                public id?: number,
                public cellNumber?: string,
                public userId?: number,
                public mapEl?: object) {}
}
