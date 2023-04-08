
import axios from "axios";
import Notiflix from "notiflix";
// import { PixabayAPI } from "./jsonplaceholder-api";


const formEl = document.querySelector("#search-form");
const inputEl = document.querySelector("[type=text]");
const galleryEl = document.querySelector(".gallery");
const alertPopup = document.querySelector(".alert");
const btnLoadMoreEl = document.querySelector(".load-more");

let page = 1;
let per_page = 5;
// const totalPages = 100 / limit;
console.log(`per_page ${per_page} page${page}`)



btnLoadMoreEl.addEventListener("click", () => {
    console.log("Cliiiick  meeeee");
    getPic()
        .then((name) => {
            createGallery(name);
            // Increase the group number
            page += 1;

            console.log(page);
        })
        .catch((error) => console.log(error));

});




function getPic(nameImgs) {
    // const params = new URLSearchParams({
    //     _limit: limit,
    //     _page: page
    // });

    return fetch(`https://pixabay.com/api/?key=35143427-54cddf882f78b9182e7e3e5c2&q=${nameImgs}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${per_page}&page=${page}`).then(
        (response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        }
    );
}

console.log("ggsssssgg");








formEl.addEventListener("submit", handlerSubmit);

function handlerSubmit(event) {
    event.preventDefault();

    const searchQuery = inputEl.value.trim();
    galleryEl.innerHTML = "";

    // if (!searchQuery) {
    //     return;
    // }
    // console.log(`getPic = ${searchQuery}`);

    getPic(searchQuery).then(data => {
        createGallery(data);
    })
    .catch(error => 
    Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again."));
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
    galleryEl.innerHTML = markupName;
};




// ????????????????????????????????????????????????????????????????????

// const pixabayAPI = new PixabayAPI();

// btnLoadMoreEl.addEventListener("click", () => {
//     // if (page < totalPages) {
//     //     return toggleAlertPopup();
//     // }
//     // return toggleAlertPopup();
//     console.log("Cliiiick  meeeee");
//     getPic()
//         .then((name) => {
//             createGallery(name);
//             // Increase the group number
//             page += 1;
//         })
//     //     .catch((error) => console.log(error));

// });



// formEl.addEventListener("submit", handlerSubmit);

// function handlerSubmit(event) {
//     event.preventDefault();

//     const searchQuery = inputEl.value.trim();
//     pixabayAPI.q = searchQuery;

//     if (!pixabayAPI.q) {
//         return;
//     }
//     pixabayAPI.page = 1;
//     pixabayAPI.fetchPhotos()
//         .then(data => {
//             if (!data.hits.lengh) {
//                 btnLoadMoreEl.classList.add("is-hiden");
//                 galleryEl.innerHTML = "";
//                 throw new Error()

//             }
//             galleryEl.innerHTML = createGallery(data.hits);
//             btnLoadMoreEl.classList.remove("is-hiden");
//         })
//         .catch(() => {
//             btnLoadMoreEl.classList.add("is-hiden");
//             Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
//         }
//             );

//     }
















// const handleSearchPhotos = async event => {
//     event.preventDefault();

//     const searchQuery = event.target.elements["searchQuery"].value.trim();
//     fotoPixababyAPI.q = searchQuery;

//     try {

//         const { data } = await fotoPixababyAPI.fetchPhoto();
//         if (!data.hits.length) {
//             Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
//             return;
//         }
//         Notiflix.Notify.success("Hooray");
//         btnLoadMoreEl.classList.remove("is-hidden");
//     }
//     if (data.totalHits <= data.page * data.per_page) {
//         btnLoadMoreEl.classList.add("is-hidden");
//         alertPopup.classList.remove("is-hidden");
//     }

//     galleryEl.innerHTML =

// }
















// import axios from "axios";
// import Notiflix from "notiflix";
// import { PixabayAPI } from "./jsonplaceholder-api";


// const formEl = document.querySelector("#search-form");
// const inputEl = document.querySelector("[type=text]");
// const galleryEl = document.querySelector(".gallery");
// const alertPopup = document.querySelector(".alert");
// const btnLoadMoreEl = document.querySelector(".load-more");


// console.log("ssggggiiia");

// galleryEl.style.outline = "2px solid red";
// // galleryEl.style.display = "flex";
// // galleryEl.style.gap = "50 px";

// // let isAlertVisible = false;
// // let page = 1;
// // let limit = 20;
// // const totalPages = 40 / limit;


// const PixabayAPI = new PixabayAPI();

// console.log("loool");


// formEl.addEventListener("submit", handlerSubmit);

// function handlerSubmit(event) {
//     event.preventDefault();

//     const searchQuery = inputEl.value.trim();
//     galleryEl.innerHTML = "";

//     if (!searchQuery) {
//         return;
//     }

//     PixabayAPI.getPic(searchQuery).then(data => {

//         createGallery(data);
//     }).catch(error =>
//         Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again."));
// }


// function createGallery(name) {
//     const markupName = (name.hits).map(element =>
//         `<div class="photo-card">
//     <img src="${element.webformatURL}" alt="${element.tags}" loading="lazy" width="350px"/>
//     <div class="info" style="display:flex; gap:15px; ">
//         <p class="info-item">
//             <b>Likes<br>${element.likes}</b>
//         </p>
//         <p class="info-item">
//             <b>Views<br>${element.views}</b>
//         </p>
//         <p class="info-item">
//             <b>Comments<br>${element.comments}</b>
//         </p>
//         <p class="info-item">
//             <b>Downloads<br>${element.downloads}</b>
//         </p>
//     </div>
// </div>`).join("");
//     galleryEl.innerHTML = markupName;
//     console.log(markupName);
// };













//   ПОКАЗУЮТЬСЯ КАРТИНКИ  БЕЗ ПЕРЕВІРКИ

// import Notiflix from "notiflix";

// const formEl = document.querySelector("#search-form");
// const inputEl = document.querySelector("[type=text]");
// const galleryEl = document.querySelector(".gallery");

// galleryEl.style.outline = "2px solid red";

// const getPic = (nameImgs) => fetch(`https://pixabay.com/api/?key=35143427-54cddf882f78b9182e7e3e5c2&q=${nameImgs}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40`)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(response.status);
//         }
//         return response.json();
//     });

// // console.log("loool");

// // formEl.addEventListener("input", handlerInput);

// // function handlerInput(event) {
// //     console.log("input  -  event.target.value");
// // }
// // console.log("ooohoooo");


// formEl.addEventListener("submit", handlerSubmit);

// function handlerSubmit(event) {
//     event.preventDefault();

//     const searchQuery = inputEl.value.trim();
//     galleryEl.innerHTML = "";

//     if (!searchQuery) {
//         return;
//     }

//     console.log(`getPic = ${searchQuery}`);

//     getPic(searchQuery).then(data => {

//         createGallery(data);
//     }).catch(error =>
//         Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again."));
// }


// function createGallery(name) {
//     const markupName = (name.hits).map(element =>
//         `<div class="photo-card">
//     <img src="${element.webformatURL}" alt="${element.tags}" loading="lazy" width="350px"/>
//     <div class="info" style="display:flex; gap:15px; ">
//         <p class="info-item">
//             <b>Likes<br>${element.likes}</b>
//         </p>
//         <p class="info-item">
//             <b>Views<br>${element.views}</b>
//         </p>
//         <p class="info-item">
//             <b>Comments<br>${element.comments}</b>
//         </p>
//         <p class="info-item">
//             <b>Downloads<br>${element.downloads}</b>
//         </p>
//     </div>
// </div>`).join("");
//     galleryEl.innerHTML = markupName;
//     console.log(markupName);
// };










//   ПРОБА ЗРОБИТИ КНОПКУ ЗАВАНТАЖИТИ ЩЕ З КОНСПЕКТУ

// const getPic = (nameImgs) => fetch(`https://pixabay.com/api/?key=35143427-54cddf882f78b9182e7e3e5c2&q=${nameImgs}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40`)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(response.status);
//         }
//         return response.json();
//     });




// // btnLoadMoreEl.addEventListener("click", () => {
// //     // if (page < totalPages) {
// //     //     return toggleAlertPopup();
// //     // }
// //     // return toggleAlertPopup();
// //     console.log("Cliiiick  meeeee");
// //     getPic()
// //         .then((name) => {
// //             createGallery(name);
// //             // Increase the group number
// //             page += 1;
// //         })
// //     //     .catch((error) => console.log(error));

// // });


// formEl.addEventListener("submit", handlerSubmit);

// function handlerSubmit(event) {
//     event.preventDefault();

//     const searchQuery = inputEl.value.trim();
//     galleryEl.innerHTML = "";

//     // if (!searchQuery) {
//     //     return;
//     // }
//     // console.log(`getPic = ${searchQuery}`);

//     getPic(searchQuery).then(data => {
//         createGallery(data);
//     })
//     // .catch(error => 
//     // Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again."));
// }

// function createGallery(name) {
//     const markupName = (name.hits).map(element =>
//         `<div class="photo-card">
//     <img src="${element.webformatURL}" alt="${element.tags}" loading="lazy" width="350px"/>
//     <div class="info" style="display:flex; gap:15px; ">
//         <p class="info-item">
//             <b>Likes<br>${element.likes}</b>
//         </p>
//         <p class="info-item">
//             <b>Views<br>${element.views}</b>
//         </p>
//         <p class="info-item">
//             <b>Comments<br>${element.comments}</b>
//         </p>
//         <p class="info-item">
//             <b>Downloads<br>${element.downloads}</b>
//         </p>
//     </div>
// </div>`).join("");
//     galleryEl.innerHTML = markupName;
//     console.log(markupName);
// };


// function toggleAlertPopup() {
//     if (isAlertVisible) {
//         return;
//     }
//     isAlertVisible = true;
//     alertPopup.classList.add("is-visible");
//     setTimeout(() => {
//         alertPopup.classList.remove("is-visible");
//         isAlertVisible = false;
//     }, 3000);
// }

