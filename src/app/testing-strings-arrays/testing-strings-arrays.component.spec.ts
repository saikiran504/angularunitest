import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingStringsArraysComponent } from './testing-strings-arrays.component';
import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

describe('String Matcher',()=>{

   let component = new AppComponent();

  it('testing String using "tobe" Matcher',()=>{
    let myString = "Kiran"
    expect(myString).toBe("Kiran");
  })

  it('testing String using "toEqual" Matcher',()=>{
    let myString = "Kiran"
    expect(myString).toEqual("Kiran");
  })

  xit('testing String using "tocontin" Matcher',()=>{
    let myString = "Kiran"
    expect(myString).toContain("K");
  })

  it('show a message',()=>
  {
    expect(component.ShowMessage("hello")).toBe("hello");
  })
  
});
