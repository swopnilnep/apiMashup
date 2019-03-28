"use strict;"

class NewsView{
    constructor(model){
        model.subscribe(this.populatePage.bind(this));
    }

    populatePage(cards, int){

    }
}