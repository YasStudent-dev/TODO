import { TodoItem, StatusFilterOption } from "@app/models/todo.model";

export const TODO_STATE_NAME = 'todoState';

export const STATUS_FILTER_OPTIONS = ["all", "pending", "done"] as const;

export const DEFAULT_FILTER: { status: StatusFilterOption } = { status: "all" };
export const DEFAULT_ITEMS: TodoItem[] = [];
