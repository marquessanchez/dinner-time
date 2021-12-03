const mealDBEndpoint = "https://www.themealdb.com/api/json/v1/1/random.php"
const cocktailDBEndpoint = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

var getMeal = async () => {
    const res = await fetch(mealDBEndpoint)
    let data = await res.json()

    console.log(data.meals[0].strMeal)
    console.log(data.meals[0].strMealThumb)
}

var getDrink = async () => {
    const res = await fetch(cocktailDBEndpoint)
    let data = await res.json()

    console.log(data.drinks[0].strDrink)
    console.log(data.drinks[0].strDrinkThumb)
}

getDrink()
getMeal()