import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FaceSnap2Component } from './face-snap2/face-snap2.component'; 
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from './header/header.component';
import { FaceSnapsService } from './services/face-snap-services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FaceSnap2Component, FaceSnapListComponent, HeaderComponent],
  templateUrl: './app.component.html',

  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  ngOnInit() {}
}
