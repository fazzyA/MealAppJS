const url = "https://www.themealdb.com/api/json/v1/1/random.php"
console.log("js start")
const thumbnailEl = document.getElementById("thumbnail");
const titleEl = document.getElementById("title");
const recipeEl = document.getElementById("recipe");
const mycardEl = document.getElementById("mycard")
const searchtxtEl = document.getElementById("searchtxt")
const searchRecEl = document.getElementById("searchRec")
function searchRandomRecipe(){
const res = fetch(url)
    .then((data) => data.json())
    .then((data1) => {
        console.log("🚀 ~ file: index.js:4 ~ res:", data1.meals[0])
        const result = data1.meals[0];
        console.log(result.strMeal)
        const title = result.strMeal
        const category = result.strCategory
        const recipe =result.strInstructions
        const thumbnail = result.strMealThumb
        mycardEl.innerHTML = `<div class="card" style="width: 18rem;">
        <img id="thumbnail" src=${thumbnail} class="card-img-top mt-4" alt="...">
        <div class="card-body">
            <h5 class="card-title" id="title">${title}</h5>
            <p class="card-text" id="recipe">${recipe.slice(0, 200) + "...."}</p>
            <a href="#" id="link" class="btn btn-primary">Check it out</a>
        </div>
    </div>
`
        // titleEl.textContent = title
        // recipeEl.textContent = recipe.slice(0, 200) + "...."
        // thumbnailEl.src = thumbnail

    })

}
const searchRecipe = () => {
    // e.preventDefault()
    searchRecEl.textContent = ""
    console.log("im in seacrh", searchtxtEl.value)
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchtxtEl.value}`)
    .then((data) => data.json())
    .then((data1)=>{
        try {
            console.log(data1.meals)
            const len = data1.meals.length
            console.log("🚀 ~ file: index.js:42 ~ .then ~ len:", len)
            const recArr = data1.meals
            for(let i = 0; i < len; i++){
                let alltext = searchRecEl.innerHTML
                searchRecEl.innerHTML = searchRecEl.innerHTML + `<div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${data1.meals[i].strMeal}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>`
    
        }
        } catch(e) {
            console.log("first", e)
        }
    })
}