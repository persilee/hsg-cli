'use strict'

module.exports = core

const pkg = require('../package.json')
const log = require('@hsg-cli/log')
const constant = require('./const')
const semver = require('semver')

function core() {
  checkPkgVersion()
  checkNodeVersion()
}

function checkNodeVersion() {
  try {
    const currentVersion = process.version
    const lowestVersion = constant.LOWEST_NODE_VERSION
    if (!semver.gte(currentVersion, lowestVersion)) {
      throw new Error(`Node.js version ${lowestVersion} or higher is required. Current version: ${currentVersion}`)
    }
  } catch (error) {
    log.error('Node.js Version Check', error.message)
    process.exit(1)
  }
}

function checkPkgVersion() {
  log.notice('cli version', pkg.version)
}
