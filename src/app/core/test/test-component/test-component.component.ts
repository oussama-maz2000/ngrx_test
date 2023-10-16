import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { TestService } from '../../services/test.service';
import { Credential } from '../../models/credential.model';
import { User } from '../../models/user.model';
import { Product } from '../../models/Product';
@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css'],
})
export class TestComponent implements OnInit {
  test_Form: FormGroup;

  constructor(private test_service: TestService) {}
  ngOnInit(): void {
    this.test_Form = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  onSubmit() {
    let user: Product = {
      id: 1,
      title: this.test_Form.get('firstName').value,
      category: this.test_Form.get('lastName').value,
      price: this.test_Form.get('email').value,
      description: this.test_Form.get('password').value,
    };
    console.log(user);

    this.test_service.sendUser(user).subscribe(console.log);
  }
}
