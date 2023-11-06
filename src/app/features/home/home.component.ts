import {
  Component,
  Injector,
  NgModuleRef,
  ViewChild,
  ViewContainerRef,
  createNgModule,
} from '@angular/core';
import { UtilEventEmitterService } from 'src/app/shared/util-event-emitter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('module_container', {
    static: false,
    read: ViewContainerRef,
  })
  module_container!: ViewContainerRef;
  navigatedFromHome: boolean;

  constructor(
    private injector: Injector,
    private utilEventEmitterService: UtilEventEmitterService
  ) {}

  ngOnInit() {
    this.navigatedFromHome = false;
    this.loadGeneratePost();
    this.utilEventEmitterService.loadListPostComponent.subscribe((data) => {
      if (data) {
        this.loadListPost();
      }
    });
  }
  loadGeneratePost() {
    this.navigatedFromHome = false;
    import('../generate-post/generate-post.module').then((module) => {
      const lazymodule = module['GeneratePostModule'];
      let moduleRef: NgModuleRef<any>;
      moduleRef = createNgModule(lazymodule, this.injector);
      const component = moduleRef.instance.getComponent();
      this.module_container.clear();
      this.module_container.createComponent(component, {
        ngModuleRef: moduleRef,
      });
    });
  }

  loadAddKeys() {
    this.navigatedFromHome = true;
    import('../add-keys/add-keys.module').then((module) => {
      const lazymodule = module['AddKeysModule'];
      let moduleRef: NgModuleRef<any>;
      moduleRef = createNgModule(lazymodule, this.injector);
      const component = moduleRef.instance.getComponent();
      this.module_container.clear();
      this.module_container.createComponent(component, {
        ngModuleRef: moduleRef,
      });
    });
  }
  loadListPost() {
    this.navigatedFromHome = true;
    import('../list-post/list-post.module').then((module) => {
      const lazymodule = module['ListPostModule'];
      let moduleRef: NgModuleRef<any>;
      moduleRef = createNgModule(lazymodule, this.injector);
      const component = moduleRef.instance.getComponent();
      this.module_container.clear();
      this.module_container.createComponent(component, {
        ngModuleRef: moduleRef,
      });
    });
  }
}
