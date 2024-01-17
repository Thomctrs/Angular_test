import { NgModule } from "@angular/core";
import{RouterModule, Routes} from "@angular/router";
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { FaceSnapsService } from "./services/face-snap-services";


const routes : Routes =[
    {path:'lst_snaps', component: FaceSnapsService},
    {path: '', component: LandingPageComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})


export class AppRoutingModule {}  