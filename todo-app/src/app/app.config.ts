import { ApplicationConfig, isDevMode } from "@angular/core";
import { provideStore } from "@ngrx/store";

import { provideStoreDevtools } from "@ngrx/store-devtools";
import { todoStore } from "./todo/store/todo.reducers";
import { provideEffects } from "@ngrx/effects";
import { todoEffects } from "./todo/store/todo.effects";
import { provideHttpClient } from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(
      { todo: todoStore },
      {
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }
    ),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects(todoEffects),
    provideHttpClient()
  ]
};
