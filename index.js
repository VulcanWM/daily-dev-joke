const axios = require('axios');
const fs = require('fs');

axios.get("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart")
.then(res => {
  console.log(res)
  const data = res.data;
  const question = data.setup;
  const punchline = data.delivery;

  var text = `
# Daily Dev Joke

- Fetches a joke from an API everyday and edits this README`
  text += "\n\n**" + question + "**"
  text += "\n*" + punchline + "*"

  fs.writeFile('README.md', text, 'utf-8', function(err, data) {
      if (err) throw err;
      console.log('Done!');
  })
})
.catch(err => {
  console.log('Error: ', err.message);
});
