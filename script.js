const mealDBEndpoint = "www.themealdb.com/api/json/v1/1/random.php"
const cocktailDBEndpoint = "www.thecocktaildb.com/api/json/v1/1/random.php"

var getMeal = async () => {
    const res = await fetch(mealDBEndpoint)
    let data = await res.json()

    console.log(data)
}

    localStorage.setItem("data.drinks");
    localStorage.setItem();

    console.log(localStorage) 
getMeal()