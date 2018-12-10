import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload-file.service';

@Component({
  selector: 'app-form-upload',
  templateUrl: './app-form-upload.component.html',
  styleUrls: ['./app-form-upload.component.css']
})
export class FormUploadComponent implements OnInit {

  selectedFiles: FileList;

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.uploadService.uploadfile(file);
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
}
