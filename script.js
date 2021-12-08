const mealDBEndpoint = "https://www.themealdb.com/api/json/v1/1/random.php"
const cocktailDBEndpoint = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
var mealNameEl = document.querySelector('#meal-name')
var drinkNameEl = document.querySelector('#drink-name')
var mealImgEl = document.querySelector('#meal-img')
var drinkImgEl = document.querySelector('#drink-img')
var getDinnerBtn = document.querySelector('#dinner-btn')
var dinnerCont = document.querySelector('#dinner')

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
    dinnerCont.classList.remove("hide")
    mealNameEl.textContent = mealName
    mealImgEl.src = mealThumb
}

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
}

getDinnerBtn.addEventListener('click', getDinner);

localStorage.setItem("data.drinks");
    localStorage.setItem();

    console.log(localStorage) 



