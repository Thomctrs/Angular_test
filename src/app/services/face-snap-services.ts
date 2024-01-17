import { Injectable } from '@angular/core';
import { FaceSnap3 } from '../models/face-snap2.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  
    lst_snap : FaceSnap3[] =[
        {
        id : 1,
        title:'Archibald',
        description: 'Mon meilleur ami depuis tout petit !',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date(),
        snaps: 0,
      },
  
      {
        id: 2 ,
        title:'Plouhinec Fc',
        description:'Easy la R2',
        imageUrl: 'https://media.ouest-france.fr/v1/pictures/MjAyMzEwMGQwNzEwOTM5OWJjNjdhNjZhMGQ2MjQ0MGE4ODA1MDQ?width=940&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=5abcd58d56abf638dbe7076a45ca8a7c9079e14768a63239aab359257d37ed25',
        createdDate:new Date(),
        snaps: 0,
      },
  
      {
        id: 3,
        title:'Isen',
        description:'Isen brest',
        imageUrl:'https://media.letelegramme.fr/api/v1/images/view/642c18705e1194285262e92e/web_golden_xxl/642c18705e1194285262e92e.1',
        createdDate:new Date(),
        snaps:0,
        location: 'poudlard',
      }
        ];

      getAllFaceSnaps(): FaceSnap3[] {
        return this.lst_snap;
      }

      snapFaceSnapById(faceSnapId: number): void{
        const snap = this.lst_snap.find(snap => snap.id === faceSnapId);
        if (snap){
          snap.snaps++;
        }
        else{
          throw new Error('Facesnap not found');
        }
      }
}