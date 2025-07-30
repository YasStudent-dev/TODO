import { Store } from '@ngxs/store';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ItemAction, TodoItem } from '@app/models/todo.model';
import { DeleteItem, SetItemEditing, ToggleItemDone } from '@app/store/todo/todo.actions';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
	selector: 'app-todo-item',
	templateUrl: './todo-item.component.html',
	styleUrl: './todo-item.component.css',
	standalone: true,
	imports: [CommonModule, MatCheckboxModule, FormsModule, TranslatePipe]
})
export class TodoItemComponent {
	@Input() item!: TodoItem;

	constructor(private store: Store) {}

	public getItemActionTranslationKey(itemAction: ItemAction): string {
		return `app.todo.listItem.actions.${itemAction}`;
	}

	public onStartItemEdit(item: TodoItem): void {
		this.store.dispatch(new SetItemEditing(item, true));
	}

	public onEndItemEdit(item: TodoItem): void {
		this.store.dispatch(new SetItemEditing(item, false));
	}

	public onDeleteItem(item: TodoItem): void {
		this.store.dispatch(new DeleteItem(item));
	}

	public onToggleItemDone(item: TodoItem): void {
		this.store.dispatch(new ToggleItemDone(item));
	}
}
