# nextjs frontend


For Env
```
module.exports = {
  env: {
    customKey: 'my-value',
  },
}
```


Using env variables in code.

```ts
function Page() {
  return <h1>The value of customKey is: {process.env.customKey}</h1>
}

export default Page
```
