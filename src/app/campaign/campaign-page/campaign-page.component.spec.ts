/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CampaignPageComponent } from './campaign-page.component';

describe('CampaignPageComponent', () => {
  let component: CampaignPageComponent;
  let fixture: ComponentFixture<CampaignPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CampaignPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});