import { SafeData } from './save-data.interface';
import { ConfirmDialogComponent } from './../admin/confirm-dialog/confirm-dialog.component';
import { AddProductComponent } from './../admin/add-product/add-product.component';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})

// 7. implement form-guard
// ใช้ <SafeData> แล้วต้องมี component: SafeData ด้านล่าง
// now we dont need to depend on concrete component lead abstracted becuase dependency inversion
export class FormGuardGuard implements CanDeactivate<SafeData> {
  // 10. inject dialog
  constructor(private dialog: MatDialog) {}
  canDeactivate(
    component: SafeData
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      
    if (!component.isDataSaved()) {
      // 8. สร้าง dialog แล้วเอาโลจิกไป apply
      // if(component.form.dirty){
      //   if(confirm("Are you sure you want to")){
      //     return true
      //   } else {
      //     return false
      //   }
      // }
      const dialogRef = this.dialog.open(ConfirmDialogComponent);
      return dialogRef.afterClosed();
    }
    return of(true);
  }
}
