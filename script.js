const mealDBEndpoint = "https://www.themealdb.com/api/json/v1/1/random.php"
const cocktailDBEndpoint = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
const meal = Document.getElementById("meal")
const drink = Document.getElementById("drink")

var mealName = ""
var mealThumb = ""
var drinkName = ""
var drinkThumb = ""


//get meal name and thumbnail
var pickMeal = async () => {
    const res = await fetch(mealDBEndpoint)
    let data = await res.json()
    mealName = data.meals[0].strMeal
    mealThumb = data.meals[0].strMealThumb

    console.log(data)
    console.log(data.meals[0].strMeal)
    console.log(data.meals[0].strMealThumb)

    
}


//get drink name and thumbnail
var pickDrink = async () => {
    const res = await fetch(cocktailDBEndpoint)
    let data = await res.json()
    drinkName = data.drinks[0].strDrink
    drinkThumb = data.drinks[0].strDrinkThumb
    console.log(data)
    console.log(data.drinks[0].strDrink)
    console.log(data.drinks[0].strDrinkThumb)
}


pickDrink()
pickMeal()