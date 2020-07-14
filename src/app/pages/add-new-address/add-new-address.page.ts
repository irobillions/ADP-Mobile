import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { google } from 'google-maps';
import {error} from 'util';
import {ProvidersService} from '../../services/utils/providers.service';
import {NavController} from '@ionic/angular';
declare var google: google;

@Component({
  selector: 'app-add-new-address',
  templateUrl: './add-new-address.page.html',
  styleUrls: ['./add-new-address.page.scss'],
})
export class AddNewAddressPage implements OnInit {
  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  address: string;
  latitude: number;
  longitude: number;
  constructor(private geolocation: Geolocation,
              private nativeGeocoder: NativeGeocoder,
              private providersService: ProvidersService, private navController: NavController) { }

  ngOnInit() {
      this.loadMap();
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then(
        (resp) => {
          this.latitude = resp.coords.latitude;
          this.latitude = resp.coords.longitude;

          const latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
          const mapOptions = {
              center: latLng,
              zoom: 15,
              mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
          this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

          this.map.addListener('dragend', () => {
              this.latitude = this.map.center.lat();
              this.longitude = this.map.center.lng();

              this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng());
          });

        }).catch((err) => {
            console.log('Error getting location', err);
    });
  }

  getAddressFromCoords(latitude, longitude) {
      console.log('getAddressFromCoords: ' + latitude + ' ' + longitude);
      const options: NativeGeocoderOptions = {
          useLocale: true,
          maxResults: 5
      };
      this.nativeGeocoder.reverseGeocode(latitude, longitude, options)
          .then((result: NativeGeocoderResult[]) => {
              this.address = '';
              const responseAddress = [];
              for (const [key, value] of Object.entries(result[0])) {
                  if (value.length > 0) {
                      responseAddress.push(value);
                  }
                  responseAddress.reverse();
                  for (const val of responseAddress) {
                      this.address += val + ', ';
                  }
                  this.address = this.address.slice(0, -2);
              }
          }).catch((err: any) => {
              this.address = 'Address Not Available!' + err;
      });
  }

    saveAddressFromMap(longitude: number, latitude: number, address: string) {
       this.providersService.obj = {long: longitude, lat: latitude, adr: address};
       this.navController.navigateBack('/add-address');
    }
}
