const URL_BASE = "http://api.giphy.com/v1/gifs/";
const API_KEY = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';


/* Your application should do the following:

Allow the user to search for a GIF and when the form is submitted,
make an AJAX request to the Giphy API and return a single GIF
Once the Giphy API has responded with data, append the GIF to the page
Allow the user to search for as many GIFs as they would like and keep appending them to the page
Allow the user to remove all of the GIFs by clicking a button
Here is an example of what the application might look like:

*/



//DONE: destructure handleformsubmit, make api_key global const,
//clear input field after search via jQuery
// make fetchURL global (base url e.g. stop at v1/gifs/
//const response = await fetch(`${GIPHY_BASE_URL}/gifs/search?${giphySearchParams}`);)
async function handleFormSubmit(evt) {
  evt.preventDefault();

  // append image to image-container
  let imgURL = await fetchImage();
  const $imageElement = $(`<img src="${imgURL}">`);
  $('.image-container').append($imageElement);
}

/**
 * Grabs search term, and then fetches from database of gifs. Selects
 * random gif and returns its url.
 * @returns img URL
 */
async function fetchImage(){
  let fetchURL = URL_BASE + 'search?'; "http://api.giphy.com/v1/gifs/search?";

  const searchTerm = $(".input-search").val(''); //Get current value of input search, then clear it ('')
  const params = new URLSearchParams({
    q: searchTerm,
    api_key: API_KEY
  });

  let response = await fetch(`${fetchURL}${params}`);
  let parsed = await response.json();
  //No need to parse json with JSON.parse?
  const randomGif = Math.floor(Math.random() * parsed.data.length);
  const responseImg = parsed.data[randomGif].images.original.url;
  return responseImg;
}


function removeImages(){
  //target image-container with jQuery, then call empty?
  let $images = $('.image-container');
  $images.empty();
}

$('#submit-button').on('click', handleFormSubmit);
$('#remove-button').on('click', removeImages);

