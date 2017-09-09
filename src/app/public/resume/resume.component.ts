import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  pdfSrc: string = '../assets/FinalResume_KavinAravind.pdf';
  page: number = 1;

  constructor() { }

  ngOnInit() {
  }

}
