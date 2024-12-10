import { ResolveFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from "@angular/router"
import { Inject } from "@angular/core";
import { RamenService } from "../../../in-memory-api/services/ramen.service";
export const ramenResolver: ResolveFn<any|null> = (
    ActivatedRoute: ActivatedRouteSnapshot,
    routerState: RouterStateSnapshot
) => {

}