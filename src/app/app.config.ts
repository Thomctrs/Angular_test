import { ApplicationConfig } from '@angular/core';
import { ROUTES, RouterModule, RouterState, Routes, RoutesRecognized, provideRouter } from '@angular/router';
import { NgModule } from "@angular/core";
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { AppRoutingModule } from './app-routing.module';
import { provideClientHydration } from '@angular/platform-browser';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers:  [provideClientHydration()]
};
