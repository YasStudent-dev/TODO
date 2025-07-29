import { StatusFilterOption, TodoItem } from "@app/models/todo.model";

export class AddItem {
    static readonly type = "[TODO] Add item";
    constructor(public name: string) {}
}

export class SetItemEditing {
    static readonly type = "[TODO] Set item editing";
    constructor(public item: TodoItem, public isEditing: boolean) {}
}

export class DeleteItem {
    static readonly type = "[TODO] Delete item";
    constructor(public item: TodoItem) {}
}

export class ToggleItemDone {
    static readonly type = "[TODO] Toggle item done";
    constructor(public item: TodoItem) {}
}

export class UpdateFilter {
    static readonly type = "[TODO] Change filter";
    constructor(public status: StatusFilterOption) {}
}

