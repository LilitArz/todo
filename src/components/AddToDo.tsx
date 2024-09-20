import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ToDoContext } from '../utils/helpers/contexts';
import { yupResolver } from '@hookform/resolvers/yup';
import { VALIDATION_SCHEMA, FORM_FIELDS } from '../utils/helpers/constants';

interface IFormInput {
    title: string;
    requiredCheckbox: boolean;
    doneCheckbox: boolean;
    maxCharacters?: number;
    deadline: string;
}
export const AddToDos = () => {
    const { addTodo } = useContext(ToDoContext);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<IFormInput>({
        resolver: yupResolver(VALIDATION_SCHEMA),
    });

    const isRequiredChecked = watch(FORM_FIELDS.REQUIRED_CHECKBOX, false);
    const isDoneChecked = watch(FORM_FIELDS.DONE_CHECKBOX, false);
    const maxCharacters = watch(FORM_FIELDS.MAX_CHARACTERS);

    const isAddButtonDisabled = isRequiredChecked && !isDoneChecked;

    const handleAdd: SubmitHandler<IFormInput> = (data) => {
        const newTodo = {
            todo: data[FORM_FIELDS.TITLE],
            completed: data[FORM_FIELDS.DONE_CHECKBOX],
            userId: 1,
            deadline: data[FORM_FIELDS.TODO_DEADLINE],
        };

        addTodo(newTodo);
        navigate('/');
    };

    return (
        <>
            <form onSubmit={handleSubmit(handleAdd)} id="formSubmit">
                <div>
                    <input
                        type="checkbox"
                        id="required"
                        {...register(FORM_FIELDS.REQUIRED_CHECKBOX)}
                    />
                    <label htmlFor="required">Required</label>
                </div>

                <div>
                    <input
                        type="number"
                        placeholder="Todo's max characters"
                        {...register(FORM_FIELDS.MAX_CHARACTERS)}
                        min={0}
                    />
                </div>

                <div>
                    <label htmlFor="todosInput">Add New Todo*</label>
                    {errors.title && <p style={{ color: 'red' }}>{errors.title.message}</p>}
                    <input
                        type="text"
                        id="todosInput"
                        {...register(FORM_FIELDS.TITLE)}
                        maxLength={maxCharacters}
                    />
                </div>
                <div>
                    <label htmlFor="dateInput">Choose Todo's Deadline*</label>
                    {errors.deadline && <p style={{ color: 'red' }}>{errors.deadline.message}</p>}
                    <input
                        type="date"
                        id="dateInput"
                        {...register(FORM_FIELDS.TODO_DEADLINE)}
                        defaultValue={new Date().toISOString().split('T')[0]}
                        min={new Date().toISOString().split('T')[0]}
                    />
                </div>

                <div>
                    <input type="checkbox" id="done" {...register(FORM_FIELDS.DONE_CHECKBOX)} />
                    <label htmlFor="done">Done</label>
                </div>

                <button type="submit" form="formSubmit" disabled={isAddButtonDisabled}>
                    Add Todo
                </button>
            </form>
        </>
    );
};
