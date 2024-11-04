// import { CanActivateChildFn } from '@angular/router';

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  GuardResult,
  MaybeAsync,
  RouterStateSnapshot,
} from '@angular/router';

// export const guardChildGuard: CanActivateChildFn = (childRoute, state) => {
//   return true;
// };

@Injectable({ providedIn: 'root' })
export class GuardChild implements CanActivateChild {
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    console.log('CHILD ROUTE:', childRoute);
    console.log('CHILD STATE:', state);

    return true;
  }
}
