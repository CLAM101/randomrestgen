# randomrestgen

## This in an NPM pakcage I created to see my food delivery app Database for the purpose of testing filters, search bars and various other functionality built into my app. 


# Install
npm install randomrestgen

# Usage
require the package at the top of your project after installation as below

const randomRest = require("randomrestgenerator")

when you call the package it will spit out a random restaurant object containing the following information

    restResponse: {

        categories: single chosen primary category for restaurant (String)
 
        img: a random image of food (String)
        
        title: a random title using a random 1st name  (String)
        
        description: some lorem ipsum (String)
        
        menue: 4 menu items that fall in line with the restaurants primary category (Array of objects)
        
        rating: a random rating between 1 and 5 (Number)
        }


## Planned improvements

build out restaurant category data further to produce more diverse restaurant results
build out menue Item option data to build out restaurants with larger menus

I am also condidering building the package out to provide more than jsut random restaurants but to also include subscriber data, random order data, driver profile data etc. I am open to any suggestions or contributions towards imporovement of this package.

I mainly built this package to fit my specific needs but I am super pleased should anyone else find some use from it. 
