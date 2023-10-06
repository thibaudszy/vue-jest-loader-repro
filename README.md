## Prettier 3 - vue2-jest issue repro

When introducing Prettier3 to our codebase, we noticed that all component tests started failing. To reproduce: 

 1. clone this repo
 2. run `npm i`
 3. run `npm run test`

You should now see this error:

```
 TypeError: Expected a SourceNode, string, or an array of SourceNodes and strings. Got [object Promise]

    > 1 | import CustomButton from './custom-button.vue';
        | ^
      2 | import Home from './home.vue';
      3 | import { mount } from '@vue/test-utils';
```


   
