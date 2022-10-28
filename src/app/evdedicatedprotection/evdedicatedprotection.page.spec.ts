import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EvdedicatedprotectionPage } from './evdedicatedprotection.page';

describe('EvdedicatedprotectionPage', () => {
  let component: EvdedicatedprotectionPage;
  let fixture: ComponentFixture<EvdedicatedprotectionPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EvdedicatedprotectionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EvdedicatedprotectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
