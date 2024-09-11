import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ToDoContext } from '../utils/helpers/contexts';

interface IFormInput {
    title: string;
}

export const AddToDos = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<IFormInput>();
    const { addTodo } = useContext(ToDoContext);
    const navigate = useNavigate();

    const handleAdd: SubmitHandler<IFormInput> = (data) => {
        const newTodos = {
            todo: data.title,
            completed: false,
            userId: 1,
        };

        addTodo(newTodos);
        navigate('/');
    };
    return (
        <form onSubmit={handleSubmit(handleAdd)}>
            {errors.title && <p style={{ color: 'red' }}>{errors.title.message}</p>}
            <input type="text" {...register('title', { required: 'Fill the field' })} />
            <button type="submit">Add Todo</button>
        </form>
    );
};
