import { Component, inject } from "@angular/core";
import { Store } from "@ngrx/store";

import { TodoComponent } from "./todo/todo.component";
import { getTodosStarted } from "./todo/store/todo.actions";
import { AppStore } from "./app.state";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [TodoComponent],
  template: `<app-todo></app-todo>`
})
export class AppComponent {
  constructor(private readonly store: Store<AppStore>) {}
  ngOnInit(): void {
    const store = inject(Store<AppStore>);
    store.dispatch(getTodosStarted());
  }
  title = "Todo App";
}
