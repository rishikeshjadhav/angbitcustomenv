import { Component, NgModule } from '@angular/core';
import { AutocompleteModule } from './autocomplete.module';

@Component({
  selector: 'autocomplete-composition-cmp',
  template: `Autocomplete composition: <autocomplete></autocomplete>`
})
class AutocompleteCompositionComponent {}

@NgModule({
  declarations: [AutocompleteCompositionComponent],
  imports: [AutocompleteModule],
  bootstrap: [AutocompleteCompositionComponent]
})
export class AutocompleteCompositionModule {}
