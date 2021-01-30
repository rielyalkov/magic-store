import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin-service/admin.service';
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from '@angular/fire/storage';
import {Observable} from 'rxjs';
import {finalize, map} from 'rxjs/operators';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthenticationService} from '../auth-service/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(
    private router: Router,
    private adminService: AdminService,
    private afStorage: AngularFireStorage,
    private authService: AuthenticationService,
  ) {

  }

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<any>;

  image: any;
  imagePath;
  imgURL: string | ArrayBuffer;



  ngOnInit(): void {
  }

  addNewProduct(): void {
    this.adminService.newProduct();
  }

  uploadPreview(event): void {
    this.image = event.target.files[0];

    if (event.length === 0) {
      return;
    }

    if (event.target.files[0].type.match(/image\/*/) == null) {
      alert('Only images are supported.');
      return;
    }

    const reader = new FileReader();
    this.imagePath = event;
    reader.readAsDataURL(this.image);
    reader.onload = () => {
      this.imgURL = reader.result;
    };
  }

  upload(): void {
    const randomId = Math.random().toString(36).substring(2);

    this.ref = this.afStorage.ref('/images/' + randomId);

    this.task = this.ref.put(this.image);

    this.uploadProgress = this.task.snapshotChanges()
      .pipe(map(s => (s.bytesTransferred / s.totalBytes) * 100));

    this.task.snapshotChanges().pipe(
      map(s => (s.bytesTransferred / s.totalBytes) * 100),
      finalize(() => this.downloadURL = this.ref.getDownloadURL())
    ).subscribe();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
