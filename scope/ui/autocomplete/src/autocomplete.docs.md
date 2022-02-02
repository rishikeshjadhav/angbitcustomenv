---
labels: ['angular', 'typescript', 'autocomplete']
description: 'A `autocomplete` component.'
---

# Autocomplete documentation

Import `AutocompleteModule` into your application:

```ts
import { AutocompleteModule } from './autocomplete.module';

// add it to your module imports
@NgModule({
  imports: [
    AutocompleteModule
  ]
})
export class AppModule {}
```

Use `AutocompleteComponent` in your templates:

```html
<autocomplete></autocomplete>
```
