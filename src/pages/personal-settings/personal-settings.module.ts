import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalSettingsPage } from './personal-settings';

@NgModule({
  declarations: [
    PersonalSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalSettingsPage),
  ],
  exports: [
    PersonalSettingsPage
  ]
})
export class PersonalSettingsPageModule {}
