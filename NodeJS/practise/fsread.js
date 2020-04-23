const fs = require('fs')

fs.readFile('./fsread.txt', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data.toString())
})