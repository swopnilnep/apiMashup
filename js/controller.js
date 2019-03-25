"use strict;"

const newsSourceMap = {};
var myNewsCards = new NewsCardList();
var myNewsView = new NewsView();

//
//  Task Flow Functions
//

function clickSearchButton(){

}

function populateCardList(numberOfSources, sourceLeftLeaning, sourceRightLeaning){
    if (sourceLeftLeaning > sourceRightLeaning){
        console.log("ERROR: Left Learning source rating must be lower than right leaning source rating");
        return;
    }

    // call the news API for 'numberOfSources' news articles and populate into NewsCardList
    

}


//
// API Getter Functions
//

function getNews(){
    //    
    // The getNews function calls the News API and gets a list of
    // news titles and content from the news sources in newsSourceMap.
    //

}

function getTone(){
    //
    // The getTone function calls the IBM sentiment analysis API
    // for the title of each news article on the list of the NewsCardList.
    // Then it assigns a set of RGB values for each of the items on the list.
    //

}

function getSummary(){

    // Uses the summary API to get a short summary of the news article
    // If the news article summary is not available, then it gives a short
    // summary of the page itself

}