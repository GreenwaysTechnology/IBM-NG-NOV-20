import { NgModule } from '@angular/core';
import { ProfileModule } from './profile/profile.module';

@NgModule({
  imports: [
    ProfileModule
  ],
  exports: [ProfileModule]
})
export class SharedModule { }
