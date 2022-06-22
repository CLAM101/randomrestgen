 const {faker} = require('@faker-js/faker')

function RandomRestResult(){
   
    // DATABASE SEEDER


    // ARRAY OF MAIN REST CATS TO CHOOSE FROM
    const restaurantCategories = [
        "portuguese", "italian", "grill", "chinese", "mexican", "indian", "healthy"
    ]
    // RANDOMLY CHOOSES A MAIN REST CAT FROM REST CAT ARRAY AND ASSIGNS RESULT TO A VARIABLE
    const randomRestCat =
        restaurantCategories[Math.floor(Math.random() * restaurantCategories.length)];

    // console.log(randomRestCat)

    const restTitle = faker.name.firstName() + "'s" + " food"

    // MENUE ITEM NAME AND CATEGORY OPTIONS ARRAY
    const itemNameOptions = [{
            name: "burger",
            categories: ["grill", "meaty", "fastfood"]
        },
        {
            name: "salad",
            categories: ["healthy", "light", "easymeals", "vegan"]
        },
        {
            name: "pizza",
            categories: ["italian", "fastfood"]
        },
        {
            name: "Spagetti",
            categories: ["italian", "pasta"]
        },
        {
            name: "Steak",
            categories: ["meaty", "grill"]
        },
        {
            name: "spare ribs",
            categories: ["meaty", "grill"]
        },
        {
            name: "english breakfast",
            categories: ["grill", "meaty", "breakfast"]
        },
        {
            name: "curry",
            categories: ["indian", "vegetarian", "in a pot"]
        },
        {
            name: "chowmein",
            categories: ["chinese", "chicken"]
        },
        {
            name: "wrap",
            categories: ["healthy", "light"]
        },
        {
            name: "oxtail",
            categories: ["grill", "in a pot"]
        },
        {
            name: "stew",
            categories: ["healthy", "vegetarian", "in a pot"]
        },
        {
            name: "full chicken",
            categories: ["portuguese", "chicken"]
        },
        {
            name: "half chicken",
            categories: ["portuguese", "chicken"]
        },
        {
            name: "tacos",
            categories: ["meaty", "mexican"]
        },
        {
            name: "nachos",
            categories: ["mexican", "fastfood"]
        },
        {
            name: "sushi",
            categories: ["chinese", "seafood"]
        },
        {
            name: "prawns",
            categories: ["seafood", "portuguese"]
        },
        {
            name: "fillet",
            categories: ["grill", "meaty"]
        },
        {
            name: "biryani",
            categories: ["indian", "vegetarian"]
        },
        {
            name: "Pozole",
            categories: ["mexican", "in a pot"]
        },
        {
            name: "Tostadas",
            categories: ["mexican", "light"]
        },
        {
            name: "roast duck",
            categories: ["chinese", "meaty"]
        },
        {
            name: "sweet and sour pork",
            categories: ["chinese", "meaty"]
        },
        {
            name: "samoosas",
            categories: ["indian", "fastfood"]
        },
        {
            name: "khaja",
            categories: ["indian", "dessert"]
        },
        {
            name: "beef chow mein",
            categories: ["chinese", "meaty"]
        },
        {
            name: "antipasta",
            categories: ["italian", "vegetarian"]
        },
        {
            name: "ravioli",
            categories: ["italian", "meaty"]
        },
        {
            name: "pita",
            categories: ["healthy", "light"]
        },
        {
            name: "Caldo Verde",
            categories: ["portuguese", "light"]
        },

    ]

    //PULLS MENUE ITEMS THAT FIT THE MAIN REST CAT AND PUSHES THEM INTO AN ELIGBLE MENUE ITEMS ARRAY
    function selectMenueItems() {
        const eeligableMenueItems = []
        for (let i = 0; i < itemNameOptions.length; i++)
            if (itemNameOptions[i].categories.includes(randomRestCat) === true) {
                eeligableMenueItems.push(itemNameOptions[i])


            }
        return eeligableMenueItems
    }

    //ASSIGNS RESULTING ARRAY FROM SELECT MENUE ITEMS FUNCTION TO A VARIABLE
    const eligbleMenueItems = selectMenueItems()

    // console.log(eligbleMenueItems)

    // CREATES A MENUE FOR THE RESTAURANT 
    function createMenue() {
        const menueItems = [{
            name: "darren",
            categories: ["portuguese", "light"]
        }]

        // PUSHES A RANDOM MENUE ITEM INTO THE MENUE ITEMS ARRAY UNTIL THE ARRAY CONTAINS 5 MENUE ITEMS
        while (menueItems.length < 5) {
            const randomMenueItem =
                eligbleMenueItems[Math.floor(Math.random() * eligbleMenueItems.length)];

            // CHECKS IF THE RANDOM MENUE ITEM NAME IS THE SAME AS A MENUE ITEM ALREADY EXISTING IN THE MENUEITEMS ARRAY
            function checkDuplicates() {
                let duplicate = ""
                let itemName = randomMenueItem.name

                for (let i = 0; i < menueItems.length; i++) {

                    if (itemName === menueItems[i].name) {
                        duplicate = "duplicate"

                    }
                    // console.log("loop running")
                }
                return duplicate
            }


            let checkduplicate = checkDuplicates()

            // console.log(checkduplicate)



            // BASED ON IF THE RANDOM MENUE ITEM IS A DUPLICATE OR NOT, WILL EITHER PUSH THE ITEM INTO THE MENUE ITEMS ARRAY OR DO NOTHING AND ALLOW THE WHILE LOOP TO RUN AGAIN
            if (checkduplicate === "duplicate") {

                // console.log("re running random")
            } else {
                menueItems.push({
                    name: randomMenueItem.name,
                    price: faker.datatype.number({
                        "min": 25,
                        "max": 99
                    }),

                    description: faker.lorem.lines(3),
                    categories: randomMenueItem.categories,
                    rating: faker.datatype.number({
                        "min": 1,
                        "max": 5
                    }),
                    restaurantname: restTitle

                });

            }
            menueItems.length;
            // console.log(menueItems)
        }
        // console.log(randomMenueItem)
        return menueItems
    }

    // ASSIGNS THE CREATEmENUE FUNCTION OUTPUT TO A VARIABLE
    var menueItemss = createMenue()

    // REMOVES THE FIRST DEFAULT MENUE ITEM FROM THE ITEMS ARRAY
    menueItemss.shift()
    // console.log(menueItemss)

    // CREATES A NEW RESTAURANT USING THE RESTAURANT MODEL RANDOM DETAIL FROM FAKER PACKAGE AS WELL AS THE ABOVE GENERATED RANDOM RESTAURANT DATA STORED IN THE MENUEITEMSS ARRAY

   const restResponse = {
        categories: randomRestCat,
        img: faker.image.food(),
        title: restTitle,
        description: faker.lorem.paragraph(),
        menue: menueItemss,
        rating: faker.datatype.number({
            "min": 1,
            "max": 5
        }),
    }

    return restResponse

    // console.log(restaurant)




}

module.exports = RandomRestResult

