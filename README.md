# bare-queue-microtask

Microtask queuing for Bare.

```
npm i bare-queue-microtask
```

## Usage

```js
const queueMicrotask = require('bare-queue-microtask')

queueMicrotask(() => {
  console.log('Draining microtasks')
})
```

## License

Apache-2.0
