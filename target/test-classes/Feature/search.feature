Feature: checking eBay search and ad to cart functionality 

@Smoke
Scenario Outline: user is able to search new item
Given user at eBay homepage
When user enter item "<item>" 
And user click on selected item
Then user click on sort
And user click on Time:newly listed
Then user click on shop by model

Examples:
|item|
|xbox|


@Smoke1
Scenario: user is able to add item to cart
Given user at search result page


