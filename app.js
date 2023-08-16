console.log("Let's get this party started!");


/* Your application should do the following:

Allow the user to search for a GIF and when the form is submitted,
make an AJAX request to the Giphy API and return a single GIF
Once the Giphy API has responded with data, append the GIF to the page
Allow the user to search for as many GIFs as they would like and keep appending them to the page
Allow the user to remove all of the GIFs by clicking a button
Here is an example of what the application might look like:
 */


//async function
//FIXME: destructure handleformsubmit, make api_key global const, clear input field after search via jQuery
// make fetchURL global (base url e.g. stop at v1/ ** const response = await fetch(`${GIPHY_BASE_URL}/gifs/search?${giphySearchParams}`);)
async function handleFormSubmit(evt) {
  evt.preventDefault();

  //fetch call
  let fetchURL = " http://api.giphy.com/v1/gifs/search?";
  const searchTerm = $(".input-search").val(); //text?
  const params = new URLSearchParams({
    'q': searchTerm,
    'api_key': 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'
  });

  let response = await fetch(`${fetchURL}${params}`);
  let parsed = await response.json()
  //let parsed = JSON.parse(response);




  // create random index integer to pass to responseImg
  const randomGif = Math.floor(Math.random() * parsed.data.length);


  const responseImg = parsed.data[randomGif].images.original.url;

  //add img src= off of parsed url
  const $imageElement = $(`<img src="${responseImg}">`);



  // append image to image-container
  $('.image-container').append($imageElement);
}

//Probably done.
function removeImages(){
  //target image-container with jQuery, then call empty?
  let $images = $('.image-container');
  $images.empty();
}

$('#submit-button').on('click', handleFormSubmit);
$('#remove-button').on('click', removeImages);

