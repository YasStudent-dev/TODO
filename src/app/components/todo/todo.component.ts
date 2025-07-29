import { Store } from '@ngxs/store';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { TranslatePipe } from '@ngx-translate/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StatusFilterOption, TodoItem } from '@app/models/todo.model';
import { TodoSelectors } from '@app/store/todo/todo.selector';
import { AddItem, UpdateFilter } from '@app/store/todo/todo.actions';
import { STATUS_FILTER_OPTIONS } from '@app/constants/todo.constants';
import { TodoItemComponent } from './todo-item/todo-item.component';

@Component({
	selector: 'app-todo',
	templateUrl: './todo.component.html',
	styleUrl: './todo.component.css',
	standalone: true,
	imports: [TodoItemComponent, CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule, TranslatePipe]
})
export class TodoComponent {
	public newTodoItemDescription!: string;
	public statusFilterOptions = STATUS_FILTER_OPTIONS;

	private currentStatusFilter$: Observable<string>;
	public selectedStatusFilter!: StatusFilterOption;

	public todoItemsList$: Observable<TodoItem[]>;

  	private currentStatusFilterSubscription!: Subscription;
	
	constructor(private store: Store) {
		this.currentStatusFilter$ = this.store.select(TodoSelectors.selectCurrentTodoStatusFilter);
		this.todoItemsList$ = this.store.select(TodoSelectors.selectTodoItems);
	}

	ngOnInit() {
		this.currentStatusFilterSubscription = this.currentStatusFilter$.subscribe(currentStatusFilter => {
			this.selectedStatusFilter = currentStatusFilter as StatusFilterOption;
		});
	}

	ngOnDestroy() {
		this.currentStatusFilterSubscription.unsubscribe();
	}

	public onAddItem(): void {
		this.store.dispatch(new AddItem(this.newTodoItemDescription));
		this.newTodoItemDescription = "";
	}

	public getStatusFilterOptionTranslationKey(statusFilterOption: StatusFilterOption): string {
        return `app.todo.filters.status.options.${statusFilterOption}`;
	}

	public onStatusFilterChange(): void {
		if (STATUS_FILTER_OPTIONS.includes(this.selectedStatusFilter as StatusFilterOption)) {
			this.store.dispatch(new UpdateFilter(this.selectedStatusFilter as StatusFilterOption));
		}
	}
}
