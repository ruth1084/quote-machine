function generateQuote() {
  console.log('Quote Generate');
  fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((data) => {
      const quote = data.content;
      const author = data.author;
      const twitterLink =
        'https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22When%20everything%20seems%20to%20be%20going%20against%20you%2C%20remember%20that%20the%20airplane%20takes%20off%20against%20the%20wind%2C%20not%20with%20it.%22%20Henry%20Ford';

      document.getElementById('tweet-quote').href = twitterLink;
      document.getElementById('text').innerText = quote;
      document.getElementById('author').innerText = author;
      document
        .getElementById('tweet_quote')
        .setAttribute(
          'href',
          'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
            encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
        );
    });
}

window.onload = () => generateQuote();
