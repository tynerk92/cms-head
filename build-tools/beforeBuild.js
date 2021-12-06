import fs from 'fs'
import matter from 'gray-matter'

function compareDates(a, b) {
  const aParsed = Date.parse(a.data.date)
  const bParsed = Date.parse(b.data.date)
  if (aParsed < bParsed) {
    return -1
  }
  if (aParsed > bParsed) {
    return 1
  }
  return 0
}

const flattenResource = (resource) => {
  if (Array.isArray(resource)) {
    return resource.map(flattenResource)
  }
  if (!resource) return {}
  let local = resource
  local = Object.assign(local, resource.data)
  delete local.data
  return local
}

function createAll(fromDir, toFile, apiDir) {
  // Create api dir if doesn't exist
  if (!fs.existsSync(apiDir)) {
    fs.mkdirSync(apiDir)
  }
  // Create file if doesn't exist
  if (!fs.existsSync(toFile)) {
    fs.writeFileSync(toFile, '{}')
  }
  return new Promise((resolve, reject) => {
    fs.readdir(fromDir, (err, files) => {
      if (err) reject(err)
      const index = []
      const contents = {}
      files.forEach((file) => {
        contents[file] = ''
        const readStream = fs.createReadStream(`${fromDir}/${file}`, 'UTF-8')
        readStream.on('data', (data, err) => {
          if (err) throw err
          contents[file] += data
        })
        readStream.on('end', () => {
          const parsed = matter(contents[file])
          delete parsed.buffer
          parsed.data.slug = file.replace(/.md$/, '')
          index.push(parsed)

          if (index.length === files.length) {
            const writeStream = fs.createWriteStream(toFile, 'UTF-8')
            let sorted = index.sort(compareDates).reverse()
            sorted = flattenResource(sorted)
            writeStream.write(JSON.stringify(sorted))
            resolve(sorted)
          }
        })
      })
    })
  })
}

const rootDir = `${__dirname}/..`
const contentDir = `${rootDir}/content/posts`
const apiDir = `${rootDir}/src/lib/data`
const allFile = `${apiDir}/posts.json`

createAll(contentDir, allFile, apiDir)
  .then((all) => {
    console.log(`${all.length} posts generated in posts API`)
  })
  .catch((err) => {
    console.error(err)
  })
