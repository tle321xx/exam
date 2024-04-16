import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SafeData } from '../../auth/save-data.interface';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})

// 12 implement SafeData at add-user, add-product
export class AddProductComponent implements OnInit, SafeData {
  @HostListener('window:beforeunload', ['$event'])
  // เมื่อกรอกฟอร์มในหน้านี้ยังไม่เสร็จจะทำการดักการ refresh
  onBeforeReload(e: BeforeUnloadEvent) {
    e.stopPropagation();
    if (this.form.dirty) {
      return (e.returnValue = 'Are you sure you want to exit?');
    }
    return;
  }

  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: new FormControl(''),
      quantity: new FormControl(0),
    });
  }
  // 13. then config safeData 
  isDataSaved(): boolean {
    return !this.form.dirty;
  }

  ngOnInit(): void {}
}
