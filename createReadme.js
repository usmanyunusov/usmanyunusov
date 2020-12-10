const request = require('request')
const fs = require('fs')

request(
  'https://frontendtoday.ru/api/articles.json',
  { json: true },
  (err, _, articles) => {
    if (err) throw err

    let readmeText = `Последние статьи из [frontendtoday.ru](https://frontendtoday.ru/):\n`

    articles.forEach((article) => {
      readmeText += `- [${article.title}](${article.url})\n`
    })

    const updateTime = new Date()
    readmeText += `---\n *Обновлено ${
      updateTime.getDate() +
      '-' +
      (updateTime.getMonth() + 1) +
      '-' +
      updateTime.getFullYear() +
      ' ' +
      updateTime.getHours() +
      ':' +
      updateTime.getMinutes()
    }*`

    fs.writeFile('README.md', readmeText, function (err) {
      if (err) throw err

      console.log('Created new file README.md')
    })
  },
)
