"use strict";

/* jshint esversion: 8 */
/* jshint browser:true */
/* jshint node:true */

// Define the Model Objects
var myNewsCards = new NewsCardList([]);
var myNewsView = new NewsView(myNewsCards);


// Define the sources
const leftArray = ["al-jazeera-english", "msnbc", "daily-mail", "newsweek", "the-new-york-times", "bbc-news","the-washington-post"];
const centerArray = ["abc-news", "cnn", "cbs-news", "associated-press","reuters", "indepedent", "the-wall-street-journal"];
const rightArray = ["the-american-conservative", "fox-news","national-review", "breitbart-news"];


//
//  Task Flow Functions
//

async function clickSearchButton() {
    
    let searchField = document.querySelector("#search-field");
    if (!searchField.checkValidity()) {
        // Validator Failed
        console.log("No Input");
    }
    else {
        // Validator Passed
        console.log("search for "+searchField.value);
        populateCardList(searchField.value);
    }
}

async function populateCardList(searchField) {

    // call the news API for news articles and populate into NewsCardList
    let leanings = [];
    
    // Process the Left Leaning Articles
    let left = leftArray.slice(0);
    let leftResponses = [];
    for (let i=0; i<3 ; i++){
        leftResponses.push(getNews(searchField,chooseSource(left)));
    }
    let leftArticles = await Promise.all(leftResponses);

    console.log("left articles:", leftArticles);

    // Process the center leaning Articles
    let center = centerArray.slice(0);
    let centerResponses = [];
    for (let i=0; i<3 ; i++){
        centerResponses.push(getNews(searchField,chooseSource(center)));
    } 
    let centerArticles = await Promise.all(centerResponses);

    // Process the right leaning articles
    let right = rightArray.slice(0);
    let rightResponses = [];
    for (let i=0; i<3 ; i++){
        rightResponses.push(getNews(searchField,chooseSource(right)));
    } 
    let rightArticles = await Promise.all(rightResponses);

    // Push al the articles to the list of leanings
    leanings.push(leftArticles);
    leanings.push(centerArticles);
    leanings.push(rightArticles);


    // Add all the articles to the cardlist
    for (let currentLeaning = 0; currentLeaning < 3; ++currentLeaning){
        for (let indexOfArticle = 0 ; indexOfArticle < leanings[currentLeaning].length; ++indexOfArticle){
            let currentArticle = leanings[currentLeaning][indexOfArticle].articles[0];
            
            // Get card elements from json
            let source = currentArticle.source.name;
            let title = currentArticle.title;
            let text = await Promise.all([getSummary(currentArticle.content)]);
            console.log(text[0]);

            let tone = await Promise.all([getTone(currentArticle.content)]);
            console.log(tone[0]);

            let aNewsCard = new NewsCard(source, title, text, tone, currentLeaning);

            myNewsCards.push(aNewsCard);
        }
    }

    // Update the view
    myNewsView.update();

}

// Picks a random source from the array of sources
function chooseSource(arrayOfSources) {
    let sourceIndex = Math.floor(Math.random() * arrayOfSources.length);
    let pickedSource = arrayOfSources[sourceIndex];
    arrayOfSources.splice(sourceIndex, 1);
    return pickedSource;
}

//
// API Getter Functions
//

async function getNews(query, source) {
    //    
    // The getNews function calls the News API and gets a list of
    // news titles and content from the news sources in newsSourceMap.
    //

    var url = 'https://newsapi.org/v2/everything?' +
        'q=' + query + '&' +
        'sources=' + (source) + '&' +
        'pageSize=1' + '&' +
        'apiKey=bbd60ca606f641e094d9440de45c1940';

    return getDataFromUrl(url);

}

async function getDataFromUrl(url){
    return fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error));
}

async function getTone(headline) {
    //
    // The getTone function calls the IBM sentiment analysis API
    // for the title of each news article on the list of the NewsCardList.
    // Then it assigns a set of RGB values for each of the items on the list.
    //
    
   let url = "https://api.meaningcloud.com/sentiment-2.1?" +
          "key=" + "77873dc3cbca39af92159ed769e6b9d2" +
          "&lang=" + "en" +
          "&txt=" + headline +
          "&txtf=" + "plain";
      
    return getDataFromUrl(url);
}

function getSummary(content) {

    // Uses the summary API to get a short summary of the news article
    // If the news article summary is not available, then it gives a short
    // summary of the page itself

 
    let url =  "https://api.meaningcloud.com/summarization-1.0?" +
        "key=" + "77873dc3cbca39af92159ed769e6b9d2" +
        "&txt=" + content +
        "&sentences=" + "10";

    let response = getDataFromUrl(url);
    return response;
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