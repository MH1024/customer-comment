import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatFormFieldBase } from '@angular/material';
import { Comment } from '../../services/comment/comment';
import { CommentDataService } from '../../services/comment-data/comment-data.service';

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

  constructor(private _formBuilder: FormBuilder, private commentDataService: CommentDataService) { }

  addComment() {
    this.commentDataService.addComment(this.newComment);
    this.newComment = new Comment();
    this.stepper.reset();
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
