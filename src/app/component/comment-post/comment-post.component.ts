import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../../services/product/product.service';

@Component({
  selector: 'app-comment-post',
  templateUrl: './comment-post.component.html',
  styleUrls: ['./comment-post.component.scss'],
})
export class CommentPostComponent implements OnInit {
  @Input() product: any;
  @Input() comment: any;
  constructor() { }

  ngOnInit() {}

}
