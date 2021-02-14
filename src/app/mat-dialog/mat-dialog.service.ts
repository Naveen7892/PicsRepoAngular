import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PicsModel } from '../pics-component/pics-model';

@Injectable({
  providedIn: 'root'
})
export class MatDialogService {

  constructor(private http: HttpClient) { }

  uploadPics(picModel: PicsModel): Observable<any> {
    console.log(picModel);
    console.log("server request post object===>>> "+ picModel);
    let formData = new FormData();
    formData.append('FileName', picModel.File, picModel.File.name);
    formData.append('Name', picModel.Name);
    return this.http.post('https://pics-repo-server.herokuapp.com/api/picture/upload', formData);
  }  
}
