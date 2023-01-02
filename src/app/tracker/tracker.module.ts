import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TrackerRoutingModule } from './tracker-routing.module';
import { TrackerComponent } from './tracker.component';
import { TrackerContainerComponent } from './tracker-container/tracker-container.component';
import { TrackerPresentationComponent } from './tracker-container/tracker-presentation/tracker-presentation.component';
import { TrackerService } from './tracker.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TrackerComponent,
    TrackerContainerComponent,
    TrackerPresentationComponent
  ],
  imports: [
    CommonModule,
    TrackerRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[
    TrackerService
  ]
})
export class TrackerModule { }
