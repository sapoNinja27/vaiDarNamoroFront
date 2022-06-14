import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, tap } from "rxjs";
import { apiUrl } from "src/constants/constants";

@Injectable({
  providedIn: "root",
})
export class FraseService {
  private path = apiUrl + "/frases";

  constructor(private http: HttpClient) {}

  publicar(pagina: Pagina): Observable<Pagina> {
    return this.http.post<Pagina>(this.path, pagina);
  }
}
