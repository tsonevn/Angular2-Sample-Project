import { Component} from "angular2/core";
import { GridLayout } from 'ui/layouts/grid-layout';
import { ListView} from 'ui/list-view';
import { Label } from 'ui/label';
import { Observable } from 'data/observable';
import { ObservableArray} from 'data/observable-array';
import { Image } from './shared/Image';
import { ImageListServices } from './shared/image-list.services';
import {Promise} from "ts-promise";

@Component({
    selector: "my-app",
    templateUrl:'./app.component.html',
    styleUrls:['./app.component.css'],
})
export class AppComponent {
    public imageLibrary: Image[];
    private content:Observable;
    private imglistSer:ImageListServices;
    constructor(){
       this.imageLibrary =Images;
       this.content= new Observable();
       this.content.set("isLoading", true);    
       this.imglistSer = new ImageListServices();
    }
    
    addNewImage(){
        var nextNumber: number = this.imageLibrary.length + 1;
        //this.imageLibrary.push({imageSource:'~/res/logo_login.png', imageName:'image'+nextNumber});
        
        
       //alert({title: "POST Response", message: JSON.stringify(this.imglistSer.load().length), okButtonText: "Close"});
       
       this.imglistSer.load()
        .catch(function(){
            console.log("error");
            return Promise.reject(new Error("Error login"));
        })
        .then(function(data){
            console.log(data.length);
        });
}
    //public message: string = "Hello, Angular!";
}
var Images = [
    {imageSource:'~/res/logo_login.png', imageName: "image1"},
    {imageSource:'res://icon', imageName: "image2"},
    {imageSource:'res://icon', imageName: "image3"},
    {imageSource:'res://icon', imageName: "image4"},
];