import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {CategoryStatus} from "@model";
import {AppHttpService} from "../../core";

@Injectable({ providedIn: 'root' })
export class CategoryStatusHttpService {
  constructor(private _appHttpService: AppHttpService) {}

  loadCategoryStatus(): Observable<CategoryStatus[]>  {
    const url = '/api/get-category-status';

    return this._appHttpService.makeGETRequest<CategoryStatus[]>(url);
  };

  updateCategoryStatus(category_id: string, level_id: string, variant_id: string, result: number): Observable<CategoryStatus> {
    const url = '/api/update-category-status';
    const data = { category_id, level_id, variant_id, result };
    return this._appHttpService.makePOSTRequest<CategoryStatus>(url, data);
  };
}
