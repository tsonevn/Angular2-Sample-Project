import { Injectable } from 'angular2/core';
import { Config } from './Config';
var imageSource = require('image-source');
import { Http, Headers } from 'angular2/http'
import {Image} from './Image';
import {ObservableArray} from 'data/observable-array';
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";

var EverLive = require('./everlive');



@Injectable()
export class ImageListServices{
    private ev;
    private config:Config;
    private _http: Http;
    
    
    constructore(){
        this.config = new Config();
        this.ev = new EverLive(this.config.getApiKey);    
    }
    
    
    
    load():any {
        
        
        var el = new EverLive('705pfa1b3c1rvp9q');
        var query = new  EverLive.Query();
        query.where().gt('Length', 2000);
       
       return el.Files.get(query)
        .then(function(data){
            //console.log(JSON.stringify(data));
            var tmpImageArray:Image[] = new Array<Image>();
            data.result.forEach(function (fileMetadata) {
                console.log('FileMeta - '+JSON.stringify(fileMetadata));
                    imageSource.fromUrl(fileMetadata.Uri).then(function (result) {
                        console.log(JSON.stringify(result));
                        tmpImageArray.push(new Image(result, fileMetadata.Filename));
                        //tmpImageArray.push({imageName:fileMetadata.Filename, imageSource:result});
                    });
                });
                return tmpImageArray;
        }),
        function(error){
            alert(JSON.stringify(error));
        return error;    
        }
        
        // var headers = new Headers();
        // headers.append("Authorization", "Bearer " + 'oV1Vo28gxClNzlmD9fxn7SF6WDAGvWTi');

        // return this._http.get('http://api.everlive.com/v1/'+this.config.getApiKey+'/Files/', {
        // headers: headers
        // })
        // .map(res => res.json())
        // .map(data => {
        
        // data.Result.forEach((grocery) => {
            
        // });
        // return data;
        // })
        // .catch(this.handleErrors);
      
}
  
  
  
    // load(){
    //     this.ev.Files.get().then(function (data) {
    //             data.result.forEach(function (fileMetadata) {
    //                 console.log("find image");
    //                 });
    //             });
    // }
    
    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
     }
}