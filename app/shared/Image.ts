import { Injectable } from 'angular2/core';

export class Image{
  public  imageSource: any;
  public  imageName: string;
    
    constructor(tmpImageSource: any, tmpImageName: string =''){
        this.imageSource = tmpImageSource;
        this.imageName = tmpImageName;
    }
}