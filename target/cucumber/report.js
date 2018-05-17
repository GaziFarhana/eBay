$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/search.feature");
formatter.feature({
  "line": 1,
  "name": "checking eBay search functionality",
  "description": "",
  "id": "checking-ebay-search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "user is able to search new item",
  "description": "",
  "id": "checking-ebay-search-functionality;user-is-able-to-search-new-item",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user at eBay homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter item \"\u003citem\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user click on selected item",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user click on sort",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on Time:newly listed",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user click on shop by model",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "checking-ebay-search-functionality;user-is-able-to-search-new-item;",
  "rows": [
    {
      "cells": [
        "item"
      ],
      "line": 12,
      "id": "checking-ebay-search-functionality;user-is-able-to-search-new-item;;1"
    },
    {
      "cells": [
        "xbox"
      ],
      "line": 13,
      "id": "checking-ebay-search-functionality;user-is-able-to-search-new-item;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2743773246,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "user is able to search new item",
  "description": "",
  "id": "checking-ebay-search-functionality;user-is-able-to-search-new-item;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user at eBay homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter item \"xbox\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user click on selected item",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user click on sort",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on Time:newly listed",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user click on shop by model",
  "keyword": "Then "
});
formatter.match({
  "location": "GUIStepdefinition.ebay()"
});
formatter.result({
  "duration": 119640256,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xbox",
      "offset": 17
    }
  ],
  "location": "GUIStepdefinition.entering(String)"
});
formatter.result({
  "duration": 2155318113,
  "status": "passed"
});
formatter.match({
  "location": "GUIStepdefinition.xbox()"
});
formatter.result({
  "duration": 3474889384,
  "status": "passed"
});
formatter.match({
  "location": "GUIStepdefinition.sort()"
});
formatter.result({
  "duration": 2117211116,
  "status": "passed"
});
formatter.match({
  "location": "GUIStepdefinition.sorteditem()"
});
formatter.result({
  "duration": 3277502604,
  "status": "passed"
});
formatter.match({
  "location": "GUIStepdefinition.shop()"
});
formatter.result({
  "duration": 3056195569,
  "status": "passed"
});
formatter.after({
  "duration": 166945893,
  "status": "passed"
});
});