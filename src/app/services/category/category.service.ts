import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Category } from "../../models/CategoryI.model";
import { Subject } from "rxjs";
import { environment } from "../../../environments/environment";
import { catchError, map } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";

const basePath = environment.api_url + "/clients/categories";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  CategoryList: Category[];
  categorySubject = new Subject<Category[]>();

  HttpOptions = {
    headers: new HttpHeaders({
      "Content-type": "application/json",
    }),
  };

  emitCategory() {
    this.categorySubject.next(this.CategoryList.slice());
  }

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {
    this.getAllCategories().subscribe(
      () => {
        console.log("succeed loading categories");
      },
      (error) => {
        console.log("failed to load categories: " + error);
      }
    );
  }

  getAllCategories() {
    return this.httpClient
      .get<Category[]>(`${basePath}`, this.HttpOptions)
      .pipe(
        map((response) => {
          this.CategoryList = response;
          console.log(response);
          this.emitCategory();
        }),
        catchError(this.authService.errorHandler)
      );
  }
}
