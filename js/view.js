"use strict;"

class newsView{
    constructor(model){
        model.subscribe(this.populatePage.bind(this));
    }

    populatePage(cards, int){

    }
}