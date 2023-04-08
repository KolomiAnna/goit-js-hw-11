
export class PixabayAPI {
    page = 1;
    q = null;
// #BASE_URL = ""
    getPic (nameImgs) {
        return fetch(`https://pixabay.com/api/?key=35143427-54cddf882f78b9182e7e3e5c2&q=${nameImgs}&image_type=photo&orientation=horizontal&safesearch=true&per_page=5&_page=${this.page}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
                return response.json();
            });

    }
}




// ====================================================================
// const JsonplaceholderAPI = new JsonplaceholderAPI();

// JsonplaceholderAPI.fetchPosts(nameImgs)
//     .then(data => {
//         console.log(data);
//     }).catch(error => {
//         console.log(error);
//     });
// ===================================================================


