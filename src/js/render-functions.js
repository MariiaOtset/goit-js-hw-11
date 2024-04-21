export function createMarkup(images) {
    return images.map(elem => {
        `<li class="gallery-item">
      <a href="${elem.largeImageURL}">
        <img src="${elem.webformatURL}" loading="lazy" alt="${elem.tags}" />
        <ul class="card-info">
          <li>Likes
            <p>${elem.likes}</p>
          </li>
          <li> Views
            <p>${elem.views}</p>
          </li>
          <li> Comments
            <p>${elem.comments}</p>
          </li>
           <li> Downloads
           <p>${elem.downloads}</p>
           </li>
        </ul>
      </a>
    </li>`
    })
.join("");
};

