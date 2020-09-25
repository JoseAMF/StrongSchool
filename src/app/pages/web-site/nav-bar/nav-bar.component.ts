import { DOCUMENT } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {
  collapsed = true;
  hideNav = false;
  currentPosition;
  @Input() Home;
  @Input() AboutUs;
  @Input() Testimonial;
  @Input() Contato;

  constructor(@Inject(DOCUMENT) private document: Document, private ref: ChangeDetectorRef) {
    // Adiciona um Listener para o evento de scroll na página inteira
    this.document.addEventListener('scroll', this.onContentScrolled.bind(this));
  }

  ngOnDestroy() {
    // Remove o Listener
    this.document.removeEventListener('scroll', this.onContentScrolled);
  }

  onContentScrolled(e) {
    const scroll = window.pageYOffset;
    if (scroll > this.currentPosition) {
      this.hideNav = true;
      this.collapsed = true;
    } else {
      this.hideNav = false;
    }
    this.currentPosition = scroll;
    this.ref.detectChanges();
  }

  ngOnInit(): void {
  }

}
