// const imageUrl = ''

const movieTitle = document.getElementById("input_title")
const movieImage = document.getElementById("input_image")
const movieRating = document.getElementById("input_rating")
const moviesTable = document.querySelector("#movie-table")

// console.log("Movie Title:",movieTitle)

class Movie {
    static id = 0
    constructor(title, imageUrl, rating){
        this.id = ++Movie.id
        this.title = title
        this.imageUrl = imageUrl
        this.rating = rating
    }

    showHtml(){
        moviesTable.innerHTML += `
        <tr class="remove-this-movie-${this.id}">
            <td scope="row">
                <img
                width="100" 
                height="100" 
                style="border: 1px solid gray; padding: 10px; border-radius: 5px;"
                src="${this.imageUrl}"/>
            </td>
            <td>${this.title}</td>
            <td>
                <span class="material-symbols-outlined" onclick="decrementRating(${this.id})">thumb_down</span>  
                <span class="material-symbols-outlined" onclick="incrementRating(${this.id})">thumb_up</span>  
                <span id="increment_decrement" class="product-data-${this.id}">${this.rating.toString()}</span>
            </td>
            <td><button class="btn btn-danger" onclick="removeMovie(${this.id})">x</button></td>
          </tr>
        `
    }

}


function addMovie(e){
    e.preventDefault()
    const movie = new Movie(movieTitle.value, movieImage.value, movieRating.value)
    document.getElementById("clear_inputs").reset();
    movie.showHtml()
}



function incrementRating(id){
   let increment = document.querySelector(`span.product-data-${id}`).innerText
   if (increment <= 4){
       for (let i = 0; i < 1; i++) {
        increment++;
           document.querySelector(`span.product-data-${id}`).innerText = increment;
       }
   }
}

function decrementRating(id){
   let decrement = document.querySelector(`span.product-data-${id}`).innerText
   if (decrement <= 5 && decrement >= 1){
       for (let i = 0; i < 1; i++) {
        decrement--;
            document.querySelector(`span.product-data-${id}`).innerText = decrement;
       }
   }
}

function toggleInputs(){
    // document.getElementById("clear_inputs").reset();
    // document.getElementById("movie-table").style.display = "none";

        let x = document.getElementById("movie-table");
        if (x.style.display === "none") {
          x.style.display = "table";
        } else {
          x.style.display = "none";
        }
      
}


function removeMovie(id){
document.querySelector(`tr.remove-this-movie-${id}`).innerHTML = "";
}


function keyboardPressed(e) {
    if (e.code == "Enter") {
        addMovie()
    }
}


