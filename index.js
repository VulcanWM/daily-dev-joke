const axios = require('axios');
const fs = require('fs');

axios.get("https://backend-omega-seven.vercel.app/api/getjoke")
.then(res => {
  const data = res.data;
  const question = data[0].question;
  const punchline = data[0].punchline;

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
