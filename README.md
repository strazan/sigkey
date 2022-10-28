# Sigkey

Create sortable string keys from integers.

```zsh
npm i sigkey
```
or if you're using yarn

```zsh
yarn add sigkey
```


```tsx
import * as sigkey from 'sigkey'

sigkey.get(42)           // -> '000042'
sigkey.get(42, 4)        // -> '0042'
sigkey.parse('000042')   // -> 42
sigkey.inc('000042')     // -> '000043'
sigkey.dec('000042')     // -> '000041'

```


