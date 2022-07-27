import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import {
  Component,
  Inject,
  ElementRef,
  OnInit,
  Renderer2,
  HostListener,
  OnDestroy,
} from '@angular/core';
import { ROUTES } from './sidebar-items';
import { AuthService } from 'src/app/core/service/auth.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  public sidebarItems: any[];
  level1Menu = '';
  level2Menu = '';
  level3Menu = '';
  public innerHeight: any;
  public bodyTag: any;
  listMaxHeight: string;
  listMaxWidth: string;
  userFullName: string;
  userImg: string;
  userType: string;
  headerHeight = 60;
  routerObj = null;
  currentRoute: string;
  connecteduserrole:string;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    public elementRef: ElementRef,
    private authService: AuthService,
    private router: Router
  ) {
    this.routerObj = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // logic for select active menu in dropdown
        const currenturl = event.url.split('?')[0];
        this.level1Menu = currenturl.split('/')[1];
        this.level2Menu = currenturl.split('/')[2];

        // close sidebar on mobile screen after menu select
        this.renderer.removeClass(this.document.body, 'overlay-open');
        this.sidebbarClose();
      }
    });
  }
  @HostListener('window:resize', ['$event'])
  windowResizecall(event) {
    this.setMenuHeight();
    this.checkStatuForResize(false);
  }
  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.renderer.removeClass(this.document.body, 'overlay-open');
      this.sidebbarClose();
    }
  }
  callLevel1Toggle(event: any, element: any) {
    if (element === this.level1Menu) {
      this.level1Menu = '0';
    } else {
      this.level1Menu = element;
    }
    const hasClass = event.target.classList.contains('toggled');
    if (hasClass) {
      this.renderer.removeClass(event.target, 'toggled');
    } else {
      this.renderer.addClass(event.target, 'toggled');
    }
  }

  callLevel2Toggle(event: any, element: any) {
    if (element === this.level2Menu) {
      this.level2Menu = '0';
    } else {
      this.level2Menu = element;
    }
  }
  callLevel3Toggle(event: any, element: any) {
    if (element === this.level3Menu) {
      this.level3Menu = '0';
    } else {
      this.level3Menu = element;
    }
  }
  ngOnInit() {
    if (this.authService.currentUserValue) {
      this.sidebarItems = ROUTES.filter((sidebarItem) => sidebarItem);
    }
    if(localStorage.getItem("roleUser")=="Admin"){
      this.connecteduserrole="editor"
  
        for (var i = this.sidebarItems.length - 1; i >= 0; i--) {
          if (
          this.sidebarItems[i].moduleName=="enseignant"
          ||this.sidebarItems[i].moduleName=="Student"
          ||this.sidebarItems[i].title=="-- Pages" 
          ||this.sidebarItems[i].title=="Multi Sessions"
          ||this.sidebarItems[i].title=="Facilitator Navigation" 
          ||this.sidebarItems[i].title=="Facilitator Sessions" 
           ||this.sidebarItems[i].title=="Assessments"
          ||this.sidebarItems[i].title=="Single assessment"
          ||this.sidebarItems[i].title=="Multi assessments"
          ||this.sidebarItems[i].title=="Facilitator Assessments"
          ||this.sidebarItems[i].title=="Single Assessment  "
          ||this.sidebarItems[i].title=="Multi Assessments  "
          ||this.sidebarItems[i].title=="Clients"
          ||this.sidebarItems[i].title=="Library"
          ||this.sidebarItems[i].title=="Facilitators"
          
          ||this.sidebarItems[i].title=="Payment"
          
          ) { 
             this.sidebarItems.splice(i, 1);
          }
      }
      }
      if(localStorage.getItem("roleUser")=="enseignant"){
        this.connecteduserrole="agence"

        for (var i = this.sidebarItems.length - 1; i >= 0; i--) {
          if (
          this.sidebarItems[i].title=="Facilitator Navigation"  
          
          ||this.sidebarItems[i].title=="Dashboard"
          ||this.sidebarItems[i].title=="Agencies"
          ||this.sidebarItems[i].title=="Templates"
          ||this.sidebarItems[i].title=="Facilitator Navigation"
          ||this.sidebarItems[i].title=="Facilitator Assessments"
          ||this.sidebarItems[i].title=="Single Assessment  "
          ||this.sidebarItems[i].title=="Multi Assessments  " 
          ||this.sidebarItems[i].moduleName=="admin" 
          ||this.sidebarItems[i].moduleName=="student" 
          ||this.sidebarItems[i].title=="-- Pages" 
          ||this.sidebarItems[i].title=="Payment Admin"
  
          
          ) { 
             this.sidebarItems.splice(i, 1);
          }
      }
      }
      if(localStorage.getItem("roleUser")=="Student"){
        this.connecteduserrole="coach"
        
        for (var i = this.sidebarItems.length - 1; i >= 0; i--) {
          if (this.sidebarItems[i].moduleName=="admin" 
          ||this.sidebarItems[i].moduleName=="enseignant" 
          ||this.sidebarItems[i].title=="Dashboard"
          ||this.sidebarItems[i].title=="Agencies"
          ||this.sidebarItems[i].title=="Templates"
          ||this.sidebarItems[i].title=="-- Pages" 
          ||this.sidebarItems[i].title=="Agency Sessions"
          ||this.sidebarItems[i].title=="Single Sessions"
          ||this.sidebarItems[i].title=="Multi Sessions"
          ||this.sidebarItems[i].title=="Clients"
          ||this.sidebarItems[i].title=="Library"
          ||this.sidebarItems[i].title=="Facilitators"
          ||this.sidebarItems[i].title=="Single Session"
          ||this.sidebarItems[i].title=="Multi Session"
          ||this.sidebarItems[i].title=="Payment"
          ||this.sidebarItems[i].title=="Payment Admin"
          ||this.sidebarItems[i].title=="Assessments"
          ||this.sidebarItems[i].title=="Single assessment  "
          ||this.sidebarItems[i].title=="Multi assessments  "
          ||this.sidebarItems[i].title=="FACILITATOR NAVIGATION"
          
          ) { 
             this.sidebarItems.splice(i, 1);
             
          }
      }
      }
    this.initLeftSidebar();
    this.bodyTag = this.document.body;
  }
  ngOnDestroy() {
    this.routerObj.unsubscribe();
  }
  initLeftSidebar() {
    const _this = this;
    // Set menu height
    _this.setMenuHeight();
    _this.checkStatuForResize(true);
  }
  setMenuHeight() {
    this.innerHeight = window.innerHeight;
    const height = this.innerHeight - this.headerHeight;
    this.listMaxHeight = height + '';
    this.listMaxWidth = '500px';
  }
  isOpen() {
    return this.bodyTag.classList.contains('overlay-open');
  }
  checkStatuForResize(firstTime) {
    if (window.innerWidth < 1025) {
      this.renderer.addClass(this.document.body, 'sidebar-gone');
    } else {
      this.renderer.removeClass(this.document.body, 'sidebar-gone');
    }
  }
  mouseHover(e) {
    const body = this.elementRef.nativeElement.closest('body');
    if (body.classList.contains('submenu-closed')) {
      this.renderer.addClass(this.document.body, 'side-closed-hover');
      this.renderer.removeClass(this.document.body, 'submenu-closed');
    }
  }
  mouseOut(e) {
    const body = this.elementRef.nativeElement.closest('body');
    if (body.classList.contains('side-closed-hover')) {
      this.renderer.removeClass(this.document.body, 'side-closed-hover');
      this.renderer.addClass(this.document.body, 'submenu-closed');
    }
  }

  sidebbarClose() {
    if (window.innerWidth < 1025) {
      this.renderer.addClass(this.document.body, 'sidebar-gone');
    }
  }
}
