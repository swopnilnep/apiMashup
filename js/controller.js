"use strict;"

const newsSourceMap = {};
var myNewsCards = new NewsCardList();
var myNewsView = new NewsView();

//
//  Task Flow Functions
//

function clickSearchButton(){
    // Validator

    // Validator Passed

}

function populateCardList(){

    // call the news API for 'numberOfSources' news articles and populate into NewsCardList
    
        // push three left sources into the myNewsCards

        // push threee center sources into myNewsCards

        // push three right sources into myNewsCards

    // Call getTone to add tone information to all the cards in myNewsCards

    // Call getSummary to add summary information to  all the cards in myNewsCards

    // Update the NewsView to display the changes

}


//
// API Getter Functions
//

function getNews(numberOfSources, sourceLeftLeaning, sourceRightLeaning){
    //    
    // The getNews function calls the News API and gets a list of
    // news titles and content from the news sources in newsSourceMap.
    //

        
    // Input Validator
    if (sourceLeftLeaning > sourceRightLeaning){
        console.log("ERROR: Left Learning source rating must be lower than right leaning source rating");
        return;
    }

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