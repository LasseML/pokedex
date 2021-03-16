import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {getStorage} from '../../../../utils/storage.utils';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.components.html',
  styleUrls: ['login-form.component.css']
})
export class LoginFormComponents implements OnInit{

  @Output() success: EventEmitter<void> = new EventEmitter();

  loading = false;

  loginForm: FormGroup = new FormGroup({
    trainerName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(15),
      Validators.pattern(/[a-zA-Z]/)
    ])
  });

  constructor(private  readonly loginService: LoginService) {
  }

  ngOnInit(): void {
    const existingTrainer = getStorage('trainer');
    if (existingTrainer !== null){
      this.success.emit();
    }
  }

  get trainerName(): (AbstractControl) {
    return this.loginForm.get('trainerName')!;
  }
  onBeginClick() {
    const { trainerName } = this. loginForm.value;
    this.loading = true;
    this.loginService.login(trainerName);
    this.handleSuccessfulLogin();
  }

  handleSuccessfulLogin(): void {
    this.success.emit();
  }
}
