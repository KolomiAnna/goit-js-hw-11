
import axios from "axios";
import Notiflix from "notiflix";
// import { PixabayAPI } from "./jsonplaceholder-api";

const formEl = document.querySelector("#search-form");
const inputEl = document.querySelector("[type=text]");
const galleryEl = document.querySelector(".gallery");
const alertPopup = document.querySelector(".alert");
const btnLoadMoreEl = document.querySelector(".load-more");

let page = 1;
let per_page = 40;
let q;

btnLoadMoreEl.classList.add("is-hidden");
alertPopup.classList.add("is-hidden");


btnLoadMoreEl.addEventListener("click", () => {
    const searchQuery = inputEl.value.trim();

    if (!searchQuery) {
        return;
    }

    page += 1;



    getPic(searchQuery).then(data => {
        createGallery(data);
        console.log(data.totalHits / 40);
        console.log(page);

        if (data.totalHits / 40 < page) {
            btnLoadMoreEl.classList.add("is-hidden");
            alertPopup.classList.remove("is-hidden");
        }
    })
        .catch((error) => console.log(error));
});



function getPic(nameImgs) {

    return fetch(`https://pixabay.com/api/?key=35143427-54cddf882f78b9182e7e3e5c2&q=${nameImgs}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${per_page}&page=${page}`).then(
        (response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        }
    )
}


formEl.addEventListener("submit", handlerSubmit);

function handlerSubmit(event) {
   
    event.preventDefault();
    galleryEl.innerHTML = "";
    const searchQuery = event.target.elements["searchQuery"].value.trim();

    q = searchQuery;

    if (!searchQuery) {
        return;
    }

    getPic(q).then(data => {
        createGallery(data);

        console.log(data.totalHits / 40);
        console.log(page);

        if (!data.hits.length) {

            btnLoadMoreEl.classList.add("is-hidden");
            throw new Error(Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again."));

        }

        if (data.totalHits / 40 < page) {
            alertPopup.classList.remove("is-hidden");
        }

        if (data.totalHits / 40 > page) {
            btnLoadMoreEl.classList.remove("is-hidden");
        }
    })
}


function createGallery(name) {
    const markupName = (name.hits).map(element =>
        `<div class="photo-card">
    <img src="${element.webformatURL}" alt="${element.tags}" loading="lazy" width="350px"/>
    <div class="info" style="display:flex; gap:15px; ">
        <p class="info-item">
            <b>Likes<br>${element.likes}</b>
        </p>
        <p class="info-item">
            <b>Views<br>${element.views}</b>
        </p>
        <p class="info-item">
            <b>Comments<br>${element.comments}</b>
        </p>
        <p class="info-item">
            <b>Downloads<br>${element.downloads}</b>
        </p>
    </div>
</div>`).join("");
    galleryEl.insertAdjacentHTML("beforeend", markupName);
};















