import { Component, OnInit } from '@angular/core';
import { FaceSnap3 } from '../models/face-snap2.model';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnap2Component } from '../face-snap2/face-snap2.component';
import { FaceSnapsService } from '../services/face-snap-services';


@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [CommonModule, FaceSnap2Component],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})

export class FaceSnapListComponent implements OnInit {
  lst_snap!: FaceSnap3[];

  constructor(private faceSnapsService: FaceSnapsService){}

  ngOnInit(): void {
  
      this.lst_snap = this.faceSnapsService.getAllFaceSnaps();
    }
    
    
    
    }
  