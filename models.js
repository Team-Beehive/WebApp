//Require for file manipulation on system
var fs = require("fs");

//holds the indiual page data for each major
module.exports.PageData = class PageData {
    constructor(id, about, campuses, type, key) {
        this.id = id;
        this.about = about;
        this.campuses = campuses;
        this.type = type;
        this.key_category = key;
    }
};

//Class that holds all the page data in pages array , has a get set for pages. Takes nothing.
module.exports.Pages = class Pages{
    pages = [];

    GetPages(){
        return this.pages;
    }
    
    AddPageData(PageData){
        this.pages.push(PageData);
    }
}

//holds a list of PageData
module.exports.Category = class Category
{
    title;
    pageData = [];
    
    constructor(category_tittle){
        this.title = category_tittle;
    }
    
    GetPageData(){
        return this.pageData;
    }
    
    AddPageData(PageData){
        this.pageData.push(PageData);
    }
}


//Holds a list of catagories
module.exports.CollectionData = class CollectionData
{
    datetime;
    categories = [];
    categoryData = [];

    constructor(){
        this.datetime = Date();
    }

    GetCategories(){
        if(this.categories != undefined){
            return this.categories;
        }
    }

    AddCategories(majorData){
        if(majorData != undefined){
            this.categories.push(majorData);
        }
    }

    AddCategoryData(majorData){
        if(majorData != undefined){
            this.categoryData.push(majorData);
        }
    }

    AddPageData(PageData){
        this.pageData.push(PageData);
    }

    PrintDate(){
        console.log(this.datetime);
    }
    
    GetDataJson()
    {
        var data = fs.readFileSync("./data.json"), myObj;

        try {
            myObj = JSON.parse(data);
            if(myObj != undefined){
                return myObj;
            }
        }
        catch (err) {
            console.log("There has been an error parsing data from data.JSON");
            console.log(err);
        }
    }

    SaveDataJson(myObj){
        var jdata = JSON.stringify(myObj);
        
        fs.writeFileSync("./data.json", jdata, function (err) {
            if (err) {
                console.log("There has been an error saving your configuration data.");
                console.log(err.message);
            }
            else { 
                console.log("Configuration saved successfully.");
            }
        }); 
    }

    SavePagesJson(myObj){
        var jdata = JSON.stringify(myObj);
    
        fs.writeFileSync("./pages.json", jdata, {flag: 'w+'}, function (err) {
            if (err) {
                console.log("There has been an error saving your pages.");
                console.log(err.message);
            }
            else { 
                console.log("Pages saved successfully.");
            }
        }); 
    }

    GetPagesJson()
    {
        var data = fs.readFileSync("./pages.json"), myObj;

        try {
            myObj = JSON.parse(data);
            if(myObj != undefined){
                return myObj;
            }
        }
        catch (err) {
            console.log("There has been an error parsing data from pages.JSON");
            console.log(err);
        }
    }
};