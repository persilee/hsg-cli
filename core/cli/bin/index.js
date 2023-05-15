#! /usr/bin/env node

const importLocal = require('import-local')

if (importLocal(__filename)) {
  require('npmlog').info('cli', 'hsg cli 本地')
} else {
  require('../lib')(process.argv.slice(2))
}
