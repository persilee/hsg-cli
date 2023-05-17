'use strict'

module.exports = core

const pkg = require('../package.json')
const log = require('@hsg-cli/log')
const constant = require('./const')

function core() {
  checkPkgVersion()
  checkNodeVersion()
}

function checkNodeVersion() {
  const currentVersion = process.version
  const lowestVersion = constant.LOWEST_NODE_VERSION
}

function checkPkgVersion() {
  log.notice('cli version', pkg.version)
}
