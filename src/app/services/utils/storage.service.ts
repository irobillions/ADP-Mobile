import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})

export class StorageService {

    constructor(public storage: Storage) {
        console.log('your storage provider is working here!');
    }

    // set a key/value
    async set(key: string, value: any): Promise<any> {
        try {
            const result = await this.storage.set(key, value);
            console.log('set string in storage' + result);
            return true;
        } catch (e) {
            console.log('reason: ' + e);
            console.error('error: ' + e);

            return false;
        }
    }

    // to get a key/value pair
     get(key: string) {
        try {
            const result = this.storage.get(key);
            console.log('storageGET: ' + key + ':' + result);

            if (result === null) {
                return null;
            }
            return result;
        } catch (e) {
            console.log('reason: ' + e);
            console.error('error: ' + e);

            return null;
        }
    }

    // set a key/value object
    async setObject(key: string, object: object) {

        try {
            const result = await this.storage.set(key, JSON.stringify(object));
            console.log('set Object in storage: ' + result);
            return true;
        } catch (e) {
            console.log('reason: ' + e);
            console.error('error: ' + e);

            return false;
        }
    }

    // get a key/value object
    async getObject(key: string) {
        try {
            const result = this.storage.get(key);

            if (result === null) {
                return null;
            }
            return JSON.parse(await result);
        } catch (e) {
            console.log('reason: ' + e);
            console.error('error: ' + e);

            return null;
        }
    }

    // remove a single key value:
    remove(key: string) {
        this.storage.remove(key).then(r => {
            console.log('removed');
        });
    }

    // delete all data from your application
    clear() {
        this.storage.clear().then(r => {
            console.log('cleared');
        });
    }
}
