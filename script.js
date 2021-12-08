const mealDBEndpoint = "https://www.themealdb.com/api/json/v1/1/random.php"
const cocktailDBEndpoint = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
var mealNameEl = document.querySelector('#meal-name')
var drinkNameEl = document.querySelector('#drink-name')
var mealImgEl = document.querySelector('#meal-img')
var drinkImgEl = document.querySelector('#drink-img')
var getDinnerBtn = document.querySelector('#dinner-btn')
var dinnerCont = document.querySelector('#dinner')
var favMeal = document.querySelector('#favorite-meals')
var favDrink = document.querySelector('#favorite-drinks')
var favMealBtn = document.querySelector('#favorite-meal-button')
var favDrinkBtn = document.querySelector('#favorite-drink-button')
var mealName = ""
var mealThumb = ""
var drinkName = ""
var drinkThumb = ""
var meals = []
var drinks = []

//get meal name and thumbnail
var pickMeal = async () => {
    const res = await fetch(mealDBEndpoint)
    let data = await res.json()
    mealName = data.meals[0].strMeal
    mealThumb = data.meals[0].strMealThumb

    mealNameEl.textContent = mealName
    mealImgEl.src = mealThumb
}
//storage 
localStorage.setItem("mealName", meal);
localStorage.setItem("");

let meals=JSON.parse(localStorage.getItem("data.meals"));
let drinks=JSON.parse(localStorage.getItem("data.drinks"));

console.log(localStorage) 
getMeal()

//get drink name and thumbnail
var pickDrink = async () => {
    const res = await fetch(cocktailDBEndpoint)
    let data = await res.json()
    drinkName = data.drinks[0].strDrink
    drinkThumb = data.drinks[0].strDrinkThumb
    
    drinkNameEl.textContent = drinkName
    drinkImgEl.src = drinkThumb
}

var getDinner = async () => {
    pickMeal()
    pickDrink()
    dinnerCont.classList.remove("hide")
}

var saveMeal = function () {
    var li = document.createElement('li')
    meals.push(mealNameEl.textContent)
    favMeal.appendChild(li)
    li.innerHTML = mealNameEl.textContent

    localStorage.setItem('meals', JSON.stringify(meals))
}

var saveDrink = function () {
    var li = document.createElement('li')
    drinks.push(drinkNameEl.textContent)
    favDrink.appendChild(li)
    li.innerHTML = drinkNameEl.textContent
    localStorage.setItem('drinks', JSON.stringify(drinks))
}

const setFavorites = function () {
    var meals = JSON.parse(localStorage.getItem('meals'))
    var drinks = JSON.parse(localStorage.getItem('drinks'))

    meals.forEach(function(meal) {
        var liMeal = document.createElement('li')
        liMeal.innerHTML = meal
        favMeal.appendChild(liMeal)
    })

    drinks.forEach(function(drink) {
        var liDrink = document.createElement('li')
        liDrink.innerHTML = drink
        favDrink.appendChild(liDrink)
    })
}

document.addEventListener("DOMContentLoaded", function(event) { 
    console.log(localStorage)
    setFavorites() 
   
});

getDinnerBtn.addEventListener('click', getDinner);
favMealBtn.addEventListener('click', saveMeal);
favDrinkBtn.addEventListener('click', saveDrink);



