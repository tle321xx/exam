import { SafeData } from './../../auth/save-data.interface';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// 12 implement SafeData at add-user, add-product then add
export class AddUserComponent implements OnInit, SafeData {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: new FormControl(''),
      email: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  isDataSaved(): boolean {
    // if this.form is dirty return false 
    return !this.form.dirty;
  }
}
