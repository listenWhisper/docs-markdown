import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MarkdownService} from '../../services/markdown.service';

@Component({
  selector: 'app-readonly-markdown',
  templateUrl: './readonly-markdown.component.html',
  styleUrls: ['./readonly-markdown.component.less']
})
export class ReadonlyMarkdownComponent implements OnInit {
  markdownContent: string | undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private markdownService: MarkdownService
  ) {
    debugger
    this.markdownService.getMarkDown(this.router.url.substring(1)).then(res => {
      debugger
    }).catch(err => {
      console.log(err);
      this.markdownContent = '';
    });
  }

  ngOnInit(): void {
  }

}
