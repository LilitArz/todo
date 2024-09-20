import { FILTER_KEYS } from '../enum';
import * as Yup from 'yup';

export const TODOS = [
    { id: 1, todo: 'Do something nice for someone you care about', completed: false, userId: 152, deadline: '09.18.2024'},
    { id: 2, todo: 'Memorize a poem', completed: true, userId: 13, deadline: '10.10.2024'},
    { id: 3, todo: 'Watch a classic movie', completed: true, userId: 68, deadline: '11.20.2024'},
    { id: 4, todo: 'Watch a documentary', completed: false, userId: 84, deadline: '12.12.2024'},
    { id: 5, todo: 'Invest in cryptocurrency', completed: false, userId: 163, deadline: '10.25.2024'},
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

export const VALIDATION_SCHEMA = Yup.object().shape({
    title: Yup.string().required('Fill the field'),
    requiredCheckbox: Yup.boolean().required(),
    doneCheckbox: Yup.boolean().required(),
    deadline: Yup.string().required('Deadline is required'),
});

export const FORM_FIELDS = {
    TITLE: 'title',
    DONE_CHECKBOX: 'doneCheckbox',
    REQUIRED_CHECKBOX: 'requiredCheckbox',
    MAX_CHARACTERS: 'maxCharacters',
    TODO_DEADLINE: 'deadline'
} as const;
