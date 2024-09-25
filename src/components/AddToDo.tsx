import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ToDoContext } from '../contexts';
import { yupResolver } from '@hookform/resolvers/yup';
import { VALIDATION_SCHEMA, FORM_FIELDS } from '../utils/constants';

interface IFormInput {
    title: string;
    requiredCheckbox: boolean;
    doneCheckbox: boolean;
    maxCharacters: number;
    deadline: string;
}
export const AddToDos = () => {
    const { addTodo } = useContext(ToDoContext);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>({
        resolver: yupResolver(VALIDATION_SCHEMA),
    });

    const handleAdd: SubmitHandler<IFormInput> = (data) => {
        const newTodo = {
            todo: data.title,
            completed: data.doneCheckbox,
            userId: 1,
            deadline: data.deadline,
        };

        addTodo(newTodo);
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit(handleAdd)} id="formSubmit">
            <div>
                <input type="checkbox" id="required" {...register(FORM_FIELDS.REQUIRED_CHECKBOX)} />
                <label htmlFor="required">Required</label>
            </div>

            <div>
                <label htmlFor="">Allowed Number of Characters for Todo</label>
                <input
                    type="number"
                    placeholder="Todo's max characters"
                    {...register(FORM_FIELDS.MAX_CHARACTERS)}
                    min={1}
                />
            </div>

            <div>
                <label htmlFor="todosInput">Add New Todo*</label>
                {errors.title && <p style={{ color: 'red' }}>{errors.title.message}</p>}
                <input type="text" id="todosInput" {...register(FORM_FIELDS.TITLE)} />
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
                {errors.doneCheckbox && (
                    <p style={{ color: 'red' }}>{errors.doneCheckbox.message}</p>
                )}
                <input type="checkbox" id="done" {...register(FORM_FIELDS.DONE_CHECKBOX)} />
                <label htmlFor="done">Done</label>
            </div>

            <button type="submit" form="formSubmit">
                Add Todo
            </button>
        </form>
    );
};
