
import iziToast from "izitoast";

const API_KEY = "43490794-44764587ca88d9eedc273b8a9";
const BASE_URL = "https://pixabay.com/api/ ";

export function fetchImages(searchQuery) {

    const SEARCH_PARAMS = new URLSearchParams({
        key: API_KEY,
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });

    return fetch(`${BASE_URL}?${SEARCH_PARAMS}`)
        .then(response => {
            if (!response.ok) {
                throw new Error();
            }
            return response.json();
        })
         .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          title: "No Images Found",
          message: "Sorry, there are no images matching your search query. Please try again!",
          position: "topRight",
        });
        return [];
      }
      return data.hits;
    })
      .catch(error => {
      console.log("catch", error);
      iziToast.error({
        title: "Error",
        message: "An error occurred while fetching images. Please try again later.",
        position: "topRight",
      });
    });
};