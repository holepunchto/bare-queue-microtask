/* global Bare */
const test = require('brittle')
const queueMicrotask = require('.')

test('basic', (t) => {
  t.plan(2)

  let ran = false

  queueMicrotask(() => {
    ran = true

    t.pass()
  })

  t.absent(ran)
})

test('throw', (t) => {
  t.plan(1)

  Bare.once('uncaughtException', (err) => {
    t.is(err.message, 'Failed')
  })

  queueMicrotask(() => {
    throw new Error('Failed')
  })
})
