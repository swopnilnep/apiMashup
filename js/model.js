"use strict;"

class NewsCard{
    constructor(source, title, text, tone, lean){
        this.source = source;
        this.title = title;
        this.text = text;
        this.tone = tone;
        this.lean = lean;

    }
}

class NewsCardList{
    constructor(newList){
        this.list = newList;
    }
    
    push(card){
        this.list.push(card);
    }

}
