import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { ControlMessagesComponent } from './component/control-messages/control-messages.component';

import {
  faCodeBranch,
  faAsterisk,
  faBars,
  faUserCircle,
  faPowerOff,
  faCog,
  faPlayCircle,
  faRocket,
  faPlus,
  faEdit,
  faTrash,
  faTimes,
  faCaretUp,
  faCaretDown,
  faExclamationTriangle,
  faFilter,
  faTasks,
  faCheck,
  faSquare,
  faLanguage,
  faPaintBrush,
  faLightbulb,
  faWindowMaximize,
  faStream,
  faBook
} from '@fortawesome/free-solid-svg-icons';

import { faGithub } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    FontAwesomeModule
  ],
  declarations: [ControlMessagesComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    FontAwesomeModule,
    ControlMessagesComponent
  ]
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faGithub);
    library.addIcons(faCodeBranch);
    library.addIcons(faAsterisk);
    library.addIcons(faBars);
    library.addIcons(faUserCircle);
    library.addIcons(faPowerOff);
    library.addIcons(faCog);
    library.addIcons(faPlayCircle);
    library.addIcons(faRocket);
    library.addIcons(faPlus);
    library.addIcons(faEdit);
    library.addIcons(faTrash);
    library.addIcons(faTimes);
    library.addIcons(faCaretUp);
    library.addIcons(faCaretDown);
    library.addIcons(faExclamationTriangle);
    library.addIcons(faFilter);
    library.addIcons(faTasks);
    library.addIcons(faCheck);
    library.addIcons(faSquare);
    library.addIcons(faLanguage);
    library.addIcons(faPaintBrush);
    library.addIcons(faLightbulb);
    library.addIcons(faWindowMaximize);
    library.addIcons(faStream);
    library.addIcons(faBook);
  }
}
