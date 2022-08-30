import { Component, OnInit, ViewChild, HostListener, ViewChildren, QueryList } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PerfectScrollbarDirective, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AppSettings } from '../app.settings';
import { Settings } from '../app.settings.model';
import { rotate } from '../theme/utils/app-animation';
import { MenuService } from '../theme/components/menu/menu.service';
import { DxScrollViewComponent } from 'devextreme-angular';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  animations: [rotate],
  providers: [MenuService]
})
export class PagesComponent implements OnInit {
  @ViewChild('sidenav') sidenav: any;
  @ViewChild('backToTop') backToTop: any;
  @ViewChildren(PerfectScrollbarDirective) pss: QueryList<PerfectScrollbarDirective>;
  @ViewChild(DxScrollViewComponent) scrollView: DxScrollViewComponent;

  public optionsPsConfig: PerfectScrollbarConfigInterface = {};
  public settings: Settings;
  public showSidenav: boolean = false;
  public showInfoContent: boolean = false;
  public toggleSearchBar: boolean = false;
  private defaultMenu: string; //declared for return default menu when window resized
  public menus = ['vertical', 'horizontal'];
  public menuOption: string;
  public menuTypes = ['default', 'compact', 'mini'];
  public menuTypeOption: string;
  scrollByContent = false;
  scrollByThumb = true;
  scrollbarMode: string;
  pullDown = false;

  constructor(public appSettings: AppSettings, public router: Router, private menuService: MenuService) {
    this.settings = this.appSettings.settings;
    console.log("entrei no page componnet");
  }

  ngOnInit() {

    this.scrollbarMode = "onHover";

    this.optionsPsConfig.wheelPropagation = false;


    if (window.innerWidth <= 960) {
      this.settings.menu = 'vertical';
      this.settings.sidenavIsOpened = false;
      this.settings.sidenavIsPinned = false;
    }

    this.menuOption = this.settings.menu;
    this.menuTypeOption = this.settings.menuType;
    this.defaultMenu = this.settings.menu;

  }

  ngAfterViewInit() {

    this.scrollView.instance.option('onReachBottom', this.updateBottomContent);

    setTimeout(() => { this.settings.loadingSpinner = false }, 300);
    this.backToTop.nativeElement.style.display = 'none';
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.scrollToTop();
      }
      if (window.innerWidth <= 960) {
        this.sidenav.close();
      }
    });

    if (this.settings.menu == "vertical")
      this.menuService.expandActiveSubMenu(this.menuService.getVerticalMenuItems());

  }

  public toggleSidenav() {
    this.sidenav.toggle();
  }

  public chooseMenu() {
    this.settings.menu = this.menuOption;
    this.defaultMenu = this.menuOption;
    if (this.menuOption == 'horizontal') {
      this.settings.fixedSidenav = false;
    }
    this.router.navigate(['/']);
  }

  public chooseMenuType() {
    this.settings.menuType = this.menuTypeOption;
  }

  public changeTheme(theme) {
    this.settings.theme = theme;
  }

  public closeInfoContent(showInfoContent) {
    this.showInfoContent = !showInfoContent;
  }

  @HostListener('window:resize')
  public onWindowResize(): void {
    if (window.innerWidth <= 960) {
      this.settings.sidenavIsOpened = false;
      this.settings.sidenavIsPinned = false;
      this.settings.menu = 'vertical'
    }
    else {
      (this.defaultMenu == 'horizontal') ? this.settings.menu = 'horizontal' : this.settings.menu = 'vertical'
      this.settings.sidenavIsOpened = true;
      this.settings.sidenavIsPinned = true;
    }
  }

  public onPsScrollY(event) {
    (event.target.scrollTop > 300) ? this.backToTop.nativeElement.style.display = 'flex' : this.backToTop.nativeElement.style.display = 'none';
  }

  public scrollToTop() {

    this.scrollView.instance.scrollBy(-100000);


    /*
    this.pss.forEach(ps => {
      if (ps.elementRef.nativeElement.id == 'main') {
        ps.scrollToTop(0, 250);
      }
    });
    */

  }

  public closeSubMenus() {
    if (this.settings.menu == "vertical") {
      this.menuService.closeAllSubMenus();
    }
  }

  valueChanged = (data) => {
    this.scrollView.instance.option('onReachBottom', data.value ? this.updateBottomContent : null);
  };

  updateBottomContent = (e) => {
    e.component.release(true);
  };

  onScrollEvent(event) {
    (event.scrollOffset.top > 300) ? this.backToTop.nativeElement.style.display = 'flex' : false;
    if (event.scrollOffset.top > 300) {
      this.backToTop.nativeElement.classList.remove("back-to-top-hide");
      this.backToTop.nativeElement.classList.add("back-to-top-show");
    } else {
      this.backToTop.nativeElement.classList.remove("back-to-top-show");
      this.backToTop.nativeElement.classList.add("back-to-top-hide");
    }
  }

}
