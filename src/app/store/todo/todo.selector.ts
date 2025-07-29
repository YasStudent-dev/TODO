import { Selector } from "@ngxs/store";
import { StatusFilterOption, TodoItem, TodoStateModel } from "@app/models/todo.model";
import { TodoState } from "./todo.state";

export class TodoSelectors
{
    @Selector([TodoState])
    static selectTodoItems(state: TodoStateModel): TodoItem[] {
        const status = state.filter.status;
        const items = state.items;

        switch (status) {
            case "pending":
                return items.filter(item => !item.isDone);
            case "done":
                return items.filter(item => item.isDone);
            case "all":
                return items;
        }
    }

    @Selector([TodoState])
    static selectCurrentTodoStatusFilter(state: TodoStateModel): StatusFilterOption {
        return state.filter.status;
    }
}
