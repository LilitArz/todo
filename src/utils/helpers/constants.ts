import { FILTER_KEYS } from "../enum";

export const TODOS = [
    { id: 1, todo: 'Do something nice for someone you care about', completed: false, userId: 152 },
    { id: 2, todo: 'Memorize a poem', completed: true, userId: 13 },
    { id: 3, todo: 'Watch a classic movie', completed: true, userId: 68 },
    { id: 4, todo: 'Watch a documentary', completed: false, userId: 84 },
    { id: 5, todo: 'Invest in cryptocurrency', completed: false, userId: 163 },
];
export const FILTER_OPTIONS = [
    {
        label: 'All',
        value: FILTER_KEYS.all,
    },
    {
        label: 'Done',
        value: FILTER_KEYS.done,
    },
    {
        label: 'Not done',
        value: FILTER_KEYS.notDone,
    },
];