"use strict;"

class newsCard{
    constructor(source, title, text, tone, lean){
        this.source = source;
        this.title = title;
        this.text = text;
        this.tone = tone;
        this.lean = lean;

    }
}

class newsCardList{
    constructor(){
        this.list = [];
    }
    
    push(card){
        this.list.push(card);
    }

}
