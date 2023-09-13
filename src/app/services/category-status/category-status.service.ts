import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {CurrentUserService} from "../../core/auth";
import {CategoryStatusHttpService} from "./category-status-http.service";
import {CategoryStatus} from "@model";

@Injectable({ providedIn: 'root' })
export class CategoryStatusService {

  private _categoryStatus$ = new BehaviorSubject<CategoryStatus[]>([]);
  categoryStatus$ = this._categoryStatus$.asObservable();

  constructor(
    private _categoryStatusHttpService: CategoryStatusHttpService,
    private _currentUserService: CurrentUserService,
  ) {
    this._categoryStatusHttpService.loadCategoryStatus().subscribe(data => {
      this._categoryStatus$.next(data);
    });
  }

  submitChallengeResult(category: string, level: string, variant: string, result: number): void {
    this._categoryStatusHttpService.updateCategoryStatus(category, level, variant, result)
      .subscribe((categoryUpdate: CategoryStatus) => {
        const categories = this._categoryStatus$.value;
        const updated = categories.map((cat) => {
          return cat.category === category ? categoryUpdate: cat;
        })
        this._categoryStatus$.next(updated);
      })
  }
}