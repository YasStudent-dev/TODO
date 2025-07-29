import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { TodoStateModel } from "@app/models/todo.model";
import { AddItem, DeleteItem, SetItemEditing, ToggleItemDone, UpdateFilter } from "./todo.actions";
import { DEFAULT_FILTER, DEFAULT_ITEMS, TODO_STATE_NAME } from "@app/constants/todo.constants";

@State<TodoStateModel>({
    name: TODO_STATE_NAME,
    defaults: {
        filter: DEFAULT_FILTER,
        items: DEFAULT_ITEMS
    }
})
@Injectable()
export class TodoState {
    @Action(AddItem)
    addItem(ctx: StateContext<TodoStateModel>, action: AddItem) {
        const items = ctx.getState().items;

        const newTodoItem = {
            description: action.name,
            isDone: false,
            isEditing: false
        }

        ctx.patchState({
            items: [...items, newTodoItem]
        });
    }

    @Action(SetItemEditing)
    setItemEditing(ctx: StateContext<TodoStateModel>, action: SetItemEditing) {
        const items = ctx.getState().items;

        const updatedItems = items.map(item => 
            item === action.item ? { ...item, isEditing: action.isEditing } : item
        );

        ctx.patchState({
            items: updatedItems
        });
    }

    @Action(DeleteItem)
    deleteItem(ctx: StateContext<TodoStateModel>, action: DeleteItem) {
        const items = ctx.getState().items;

        const updatedItems = items.filter(item => item !== action.item);

        ctx.patchState({
            items: updatedItems
        });
    }

    @Action(ToggleItemDone)
    toggleItemDone(ctx: StateContext<TodoStateModel>, action: ToggleItemDone) {
        const items = ctx.getState().items;

        const updatedItems = items.map(item =>
            item === action.item ? { ...item, isDone: !item.isDone } : item
        );

        ctx.patchState({
            items: updatedItems
        });
    }

    @Action(UpdateFilter)
    updateFilter(ctx: StateContext<TodoStateModel>, action: UpdateFilter) {
        ctx.patchState({
            filter: {
                status: action.status
            }
        });
    }
}
