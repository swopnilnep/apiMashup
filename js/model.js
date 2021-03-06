"use strict";
/* jshint esversion: 8 */
/* jshint browser:true */
/* jshint node:true */

class NewsCard{
    constructor(source, title, text, tone, link, lean){
        this.source = source;
        this.title = title;
        this.text = text;
        this.tone = tone;
        this.link = link;
        this.lean = lean;

    }
}

class NewsCardList{
    constructor(){
        this.list = [];
    }
    
    push(card){
        this.list.push(card);
    }

    cards(){
        return this.list;
    }

    assign(newList){
        this.list = newList.list();
    }

    clear(){
        this.list = [];
    }

}
