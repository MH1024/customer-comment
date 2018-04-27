import { Component, OnInit } from '@angular/core';
import {Comment} from '../../services/comment/comment';
import { CommentDataService } from '../../services/comment-data/comment-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  comments: Comment[];

  constructor(private commentDataService: CommentDataService) { }

  ngOnInit() {
    this.getAllComments();
  }

  getAllComments(): void {
    this.commentDataService.getAllComments()
    .subscribe(comments => this.comments = comments);
  }

}
