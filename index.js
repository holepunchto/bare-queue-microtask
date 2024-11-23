const resolved = Promise.resolve()

const crash = (err) =>
  setImmediate(() => {
    throw err
  })

module.exports = function queueMicrotask(fn) {
  resolved
    .then(fn)
    // Make sure that exceptions are reported as normal uncaughts, not promise
    // rejections.
    .catch(crash)
}
