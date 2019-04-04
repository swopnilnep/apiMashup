"use strict";
/* jshint esversion: 8 */
/* jshint browser:true */
/* jshint node:true */

class NewsView{
    constructor(cards){
        this.cards = cards;
    }

    // builds a card based on the information
    createCard(title, source, content, link, tone, lean){

           
            
            let firstCardBody = document.createElement("div");
            firstCardBody.className = "card-body";
        
            let innerCard = document.createElement("div");
            innerCard.className = "card inner-card"; //contingent on sentiment analysis
        
            let secondCardBody = document.createElement("div");
            //secondCardBody.className = "card-body";
            if(tone.score_tag == "P+" || "P"){
                secondCardBody.className = "card-body text-success"
            }

            if(tone.score_tag == "N" || "N+"){
                secondCardBody.className = "card-body text-danger"
            }
            if(tone.score_tag == "NEU" || "NONE"){
                secondCardBody.className = "card-body"
            }
        
            let cardTitle = document.createElement("h5");
            cardTitle.className = "card-title"; //contingent on sentiment analysis
            cardTitle.innerHTML = title;
        
            let cardSource = document.createElement("h6");
            cardSource.className = "card-subtitle mb-2 text-muted";
            cardSource.innerHTML = source;
        
            let cardContent = document.createElement("p");
            cardContent.className = "card-text";
            cardContent.innerHTML = content; //contingent on summary api
        
            let cardLink = document.createElement("a");
            cardLink.className = "card-link";
            cardLink.innerHTML = "Article Link";
            cardLink.href = link;

            
                
            
            if(lean == 0){
                let location = document.getElementById("leftLeaning");
                location.appendChild(firstCardBody);
            }
            if(lean == 1){
                let location = document.getElementById("centerLeaning");
                location.appendChild(firstCardBody);
            }
            if(lean == 2){
                let location = document.getElementById("rightLeaning");
                location.appendChild(firstCardBody);
            }
        
        
            
            // location = document.getElementById(location);
            // location.appendChild(card);
        
            firstCardBody.appendChild(innerCard);
            innerCard.appendChild(secondCardBody);
            secondCardBody.appendChild(cardTitle);
            secondCardBody.appendChild(cardSource);
            secondCardBody.appendChild(cardContent);
            secondCardBody.appendChild(cardLink);
        
            //return card;
        
        }


    // Adds cards element by element into the main view
    update(){
        // Reads every element in this.cards

        // 

        for(var i=0; i<9; i++){
            this.createCard(this.cards[i].title, this.cards[i].source, this.cards[i].text, this.cards[i].link);
            if(this.cards[i].tone.score_tag = "P+" || "P"){
                //color change
            }

            if(this.cards[i].tone.score_tag = "NEU" || "NONE"){
                //color change
            }
            if(this.cards[i].tone.score_tag = "N" || "N+"){
                //color change
            }
            if(this.cards[i].lean = 0){
               let location = document.getElementById("leftLeaning");
               location.appendChild(this.cards[i]);
            }
            if(this.cards[i].lean = 1){
                let location = document.getElementById("centerLeaning");
                location.appendChild(this.cards[i]);
            }
            if(this.cards[i].lean = 2){
                let location = document.getElementById("rightLeaning");
                location.appendChild(this.cards[i]);
            }
        }

        //reads every element in this.cards 

        //looks where cards lean and builds a card for each element and then looks at leaning and places it based on the id of leaning

    }
}
