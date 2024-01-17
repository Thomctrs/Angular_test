import { Component } from '@angular/core';
import { FaceSnap3 } from '../models/face-snap2.model';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnapsService } from '../services/face-snap-services';


@Component({
  selector: 'app-face-snap2',
  standalone: true,
  imports: [CommonModule], // Importez CommonModule ici
  templateUrl: './face-snap2.component.html',
  styleUrls: ['./face-snap2.component.scss']
})
export class FaceSnap2Component {
  buttonText!: string;

  // Input de FaceSnap3
  @Input() faceSnap!: FaceSnap3;

  constructor(private FaceSnapsService: FaceSnapsService){

  }
  ngOnInit() {
    this.buttonText = "Oh snap !";
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.FaceSnapsService.snapFaceSnapById(this.faceSnap.id);
      this.buttonText = 'Again!';
    } else {
      this.faceSnap.snaps++;
      this.buttonText = 'Again!'
    }
  }
}
