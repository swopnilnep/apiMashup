"use strict";
/* jshint esversion: 8 */
/* jshint browser:true */
/* jshint node:true */

class NewsView{
    constructor(model){
        model.subscribe(this.populatePage.bind(this));
    }

    populatePage(cards, int){

    }
}