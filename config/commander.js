let { program } = require('commander')
let shell = require('shelljs')

program.description('parsing options ...').option('-r, --repo <repo>', 'repository')
program.parse()
const repository = './' + program.opts().repo
if (repository === './') {
  process.exit(1)
}
shell.mkdir('-p', repository)
shell.cp('-R', './src', repository)
