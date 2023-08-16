


async function dadJoker(evt) {
  evt.preventDefault();

const params =
  {
    headers: {
      Accept: "application/json"
    }
  };

  const response = await fetch("https://icanhazdadjoke.com/search?term=pirate", params);

  const parsedResponse = await response.json();

  const randomResponse = Math.floor(Math.random() * parsedResponse.results.length);

  console.log(parsedResponse.results[randomResponse].joke);


}
$('#submit-button').on('click', dadJoker);