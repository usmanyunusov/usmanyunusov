const request = require('request')
const dayjs = require('dayjs');
const fs = require('fs')

request(
  'https://frontendtoday.ru/api/articles.json',
  { json: true },
  (err, _, articles) => {
    if (err) throw err

    let readmeText = `👨‍💻 Последние статьи из [frontendtoday.ru](https://frontendtoday.ru/):\n`

    articles.forEach((article) => {
      readmeText += `- [${article.title}](${article.url})\n`
    })

    readmeText += `\n*\`Обновлено ${dayjs().format('YYYY-MM-DD HH:mm')}\`*`

    fs.writeFile('README.md', readmeText, function (err) {
      if (err) throw err

      console.log('Created new file README.md')
    })
  },
)
