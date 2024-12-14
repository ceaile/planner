import { ResolveFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from "@angular/router"
import { Inject, inject } from "@angular/core";
import { RamenService } from "../../../in-memory-api/services/ramen.service";
export const ramenResolver: ResolveFn<any|null> = (
    activatedRoute: ActivatedRouteSnapshot,
    routerState: RouterStateSnapshot
) => {
    console.log("resolver working");
const _ramenSvc = inject(RamenService);
const _router = inject(Router);

const ramenId = activatedRoute.paramMap.get('id');

if (ramenId){ 
    const ramen = _ramenSvc.getRamenById(ramenId);
    return ramen;
 }
else{
    console.log("resolver error");
    _router.navigateByUrl('home'); //cambiar a error despues
    return null;
}

}