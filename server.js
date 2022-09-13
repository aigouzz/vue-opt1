let express = require('express')
let app = express()
let fs = require('fs')
let port = 3001

app.use(express.static('./dist'))

app.get('/', (req, res) => {
  let result = fs.readFileSync('./dist/index.html', 'utf-8')
  res.send(result)
})

app.listen(port, () => {
  console.log(`服务器已经运行，在端口${port}`)
})
