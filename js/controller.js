"use strict";
/* jshint esversion: 8 */
/* jshint browser:true */
/* jshint node:true */

const newsSourceMap = {};
//var myNewsCards = new NewsCardList();
//var myNewsView = new NewsView();

var biasDict = {
                "al-jazeera-english": -.9,
                "msnbc": -.8,
                "daily-mail": -.8,
                "newsweek": -.7,
                "the-new-york-times": -.6,
                "bbc-news": -.5,
                "the-washington-post": -.5,

                "abc-news":-.4,  
                "cnn": -.3,
                "cbs-news": -.2,
                "associated-press": -.1,
                "reuters": 0.0,
                "independent": .2,
                "the-wall-street-journal": .3,

                "the-american-conservative": .5,
                "fox-news": .6,
                "national-review": .7,
                "breitbart-news": .8,
            
                
                }


//
//  Task Flow Functions
//

async function clickSearchButton(){
    let searchField = document.getElementById("searchField").value
    
    // Validator Not Passed
    if (searchField == ""){
        console.log("ERROR: Invalid Input");
        return;
    }

    // Validator Passed
    else {
        populateCardList(searchField);
    }
}

async function populateCardList(searchField){

    var leftArray= ["al-jazeera-english", "msnbc", "daily-mail",
    "newsweek", "the-new-york-times", "bbc-news",
    "the-washington-post"];

    var centerArray = ["abc-news", "cnn", "cbs-news", "associated-press",
    "reuters", "indepedent", "the-wall-street-journal"];

    var rightArray = ["the-american-conservative", "fox-news", 
    "national-review", "breitbart-news"];

    let[leftNews, centerNews, rightNews] = await Promise.all([
        getNews(searchField, chooseSource(leftArray)),
        getNews(searchField,chooseSource(centerArray)),
        getNews(searchField,chooseSource(rightArray)),
    ]);
    console.log(leftNews['title']);
    console.log(centerNews['title']);
    console.log(rightNews['title']);
   

    leftArray = ["al-jazeera-english", "msnbc", "daily-mail",
    "newsweek", "the-new-york-times", "bbc-news",
    "the-washington-post"];

    centerArray = ["abc-news", "cnn", "cbs-news", "associated-press",
    "reuters", "indepedent", "the-wall-street-journal"];

    rightArray = ["the-american-conservative", "fox-news", 
    "national-review", "breitbart-news"];


function chooseSource(arrayOfSources){
    let sourceIndex = Math.floor(Math.random() * arrayOfSources.length);
    let pickedSource = arrayOfSources[sourceIndex];
    arrayOfSources.splice(sourceIndex,1);
    return pickedSource;
}


    // call the news API for news articles and populate into NewsCardList
    
        // push three left sources into myNewsCards

        // push threee center sources into myNewsCards

        // push three right sources into myNewsCards

    // Call getTone to add tone information to all the cards in myNewsCards

    // Call getSummary to add summary information to  all the cards in myNewsCards

    // Update the NewsView to display the changes

}

//
// API Getter Functions
//

async function getNews(query, source){
    //    
    // The getNews function calls the News API and gets a list of
    // news titles and content from the news sources in newsSourceMap.
    //

    var url = 'https://newsapi.org/v2/everything?' +
          'q='+query+'&'+
          'sources='+source+'&'+
          'apiKey=bbd60ca606f641e094d9440de45c1940'; 

    var req = new Request(url);

    return fetch(req)
        .then(
            response => response.json()
        )
        .catch(
            error => console.log(error)
        )

    }


async function getTone(headline){
    //
    // The getTone function calls the IBM sentiment analysis API
    // for the title of each news article on the list of the NewsCardList.
    // Then it assigns a set of RGB values for each of the items on the list.
    //

}

async function getSummary(headline){

    // Uses the summary API to get a short summary of the news article
    // If the news article summary is not available, then it gives a short
    // summary of the page itself

}

function createCard(title, source, content, link, location){

    let card = document.createElement("div");
    card.className = "card";
    
    let firstCardBody = document.createElement("div");
    firstCardBody.className = "card-body";

    let innerCard = document.createElement("div");
    innerCard.className = "card inner-card"; //contingent on sentiment analysis

    let secondCardBody = document.createElement("div");
    secondCardBody.className = "card-body";

    let cardTitle = document.createElement("h5");
    cardTitle.className = ""; //contingent on sentiment analysis
    cardTitle.innerHTML = title;

    let cardSource = document.createElement("h6");
    cardSource.className = "card-subtitle mb-2 text-muted";
    cardSource.innerHTML = source;

    let cardContent = document.createElement("p");
    cardContent.className = "card-text";
    cardContent.innerHTML = content; //contingent on summary api

    let cardLink = document.createElement("a");
    cardLink.className = "card-link";
    cardLink.href = "#";
    cardLink.innerHTML = link;

    
    location = document.getElementById(location);
    location.appendChild(card);

    card.appendChild(firstCardBody);
    firstCardBody.appendChild(innerCard);
    innerCard.appendChild(secondCardBody);
    secondCardBody.appendChild(cardTitle);
    secondCardBody.appendChild(cardSource);
    secondCardBody.appendChild(cardContent);
    secondCardBody.appendChild(cardLink);

    //return card;
    
    
    


}