import fs from 'fs'

export async function process(filename) {
  const METADATA_REGEX = /---((.|\r\n)*)---/g
  const METADATA_TAGS_REGEX = /---(\r\n)?/g

  const md = fs.readFileSync(filename, 'utf8')

  const metaTag = md.match(METADATA_REGEX)[0]
  const metaData = metaTag.replace(METADATA_TAGS_REGEX, '')
  return md.replace(metaTag, '').trim()
}
