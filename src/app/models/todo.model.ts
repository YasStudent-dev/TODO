import { STATUS_FILTER_OPTIONS } from '@app/constants/todo.constants'

export type StatusFilterOption = typeof STATUS_FILTER_OPTIONS[number];

export interface FilterOptions {
    status: StatusFilterOption
}

export interface TodoItem {
    description: string,
    isDone: boolean,
    isEditing: boolean
}

export interface TodoStateModel {
    filter: FilterOptions,
    items: TodoItem[]
}

// ------------------------------------------ Todo item constants ---------------------------------------------

export type ItemAction = 'edit' | 'delete' | 'save' | 'cancel';