#!/usr/bin/env node
const readline = require('readline')

const question = process.argv[2]
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

if (!question) throw Error('No question supplied')

rl.question(`${question} Y/n `, answer => {
  const confirmed = /^(y(es)?|true)$/i.test(String(answer).trim())

  process.exit(confirmed ? 0 : 1)
})
