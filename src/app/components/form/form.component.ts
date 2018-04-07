import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatFormFieldBase } from '@angular/material';
import { Comment } from '../../services/comment/comment';
import { CommentDataService } from '../../services/comment-data/comment-data.service';
import { log } from 'util';
import { Logs } from 'selenium-webdriver';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [CommentDataService]
})
export class FormComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  newComment: Comment = new Comment();
  @ViewChild('stepper') stepper;
  @ViewChild('foodQuality') foodQuality;
  @ViewChild('foodTaste') foodTaste;
  @ViewChild('serviceQuality') serviceQuality;
  @ViewChild('serviceSpeed') serviceSpeed;

  constructor(private _formBuilder: FormBuilder, private commentDataService: CommentDataService) { }

  addComment() {
    this.commentDataService.addComment(this.newComment);
    this.newComment = new Comment();
    this.stepper.reset();
    this.foodQuality.value = 1;
    this.foodTaste.value = 1;
    this.serviceQuality.value = 1;
    this.serviceSpeed.value = 1;
  }

  changeFQ(event: any) {
    this.newComment.food_quality = event.value;
  }
  changeFT(event: any) {
    this.newComment.food_taste = event.value;
  }
  changeSQ(event: any) {
    this.newComment.service_quality = event.value;
  }
  changeSS(event: any) {
    this.newComment.service_speed = event.value;
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
