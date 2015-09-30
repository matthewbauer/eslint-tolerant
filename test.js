var denodeify = require('denodeify')
var eslint = require('eslint')
var fs = require('fs')
var rules = require('.')

function test(path) {
  if (!path.endsWith('.js'))
    return Promise.resolve()
  return denodeify(fs.readFile)(path, 'utf8').then(function(source) {
    return eslint.linter.verify(source, rules, path)
  }).then(function(messages) {
    if (messages.length > 0 && !messages[0].fatal)
      throw new Error('file ' + path + ' has errors')
  })
}

function traverse(path) {
  return denodeify(fs.stat)(path).then(function(stat) {
    if (stat.isFile())
      return test(path)
    else if (stat.isDirectory())
      return denodeify(fs.readdir)(path).then(function(files) {
        return Promise.all(files.map(function(file) {
          return traverse(path + '/' + file)
        }))
      })
  })
}

traverse('test/underscore/underscore.js').catch(console.error)
traverse('test/backbone/backbone.js').catch(console.error)
traverse('test/codemirror/lib/codemirror.js').catch(console.error)
traverse('test/browserify/index.js').catch(console.error)
traverse('test/yo').catch(console.error)
traverse('test/express/lib').catch(console.error)
