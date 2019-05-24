import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { throwError } from 'rxjs';
import { map, catchError  } from 'rxjs/operators';
import { PixinService } from '../pixin.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  // @Input() profileId: number;
  images: {};
  objectKeys = Object.keys;

  constructor(private service: PixinService) { }

  ngOnInit() {
    this.service.getImages('Rainbow').subscribe(
      data => {
        this.images = data;
        console.log(this.images);
      }
    );
  }
}
