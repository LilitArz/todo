import { useContext, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ToDoContext } from '../utils/helpers/contexts';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'Yup';

interface IFormInput {
    title: string;
}

export const AddToDos = () => {
    const [inputMaxLimit, setInputMaxLimit] = useState<number | null>(null);
    const [completed, setCompleted] = useState<boolean>(false);

    const handleTextMaxLimit = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputMaxLimit(parseInt(e.target.value));
    };
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<IFormInput>();

    const handleFirstCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCompleted(e.target.checked);
    };
    const handleSecondCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!completed) setCompleted(e.target.checked);
    };

    const { addTodo } = useContext(ToDoContext);
    const navigate = useNavigate();
    const handleAdd: SubmitHandler<IFormInput> = (data) => {
        const newTodos = {
            todo: data.title,
            completed,
            userId: 1,
        };

        addTodo(newTodos);
        navigate('/');
    };

    return (
        <>
            <form onSubmit={handleSubmit(handleAdd)} id="form'sSubmit">
                <div>
                    <input
                        type="checkbox"
                        name="checkboxRequired"
                        checked={completed}
                        onChange={handleFirstCheckboxChange}
                    />
                    <label htmlFor="checkboxRequired">Required</label>
                </div>
                <div>
                    <input
                        type="number"
                        onChange={handleTextMaxLimit}
                        placeholder="todo's max characters"
                    />
                </div>
                {errors.title && <p style={{ color: 'red' }}>{errors.title.message}</p>}
                <div>
                    <input
                        type="text"
                        {...register('title', {
                            required: 'Fill the field',
                            maxLength: inputMaxLimit || undefined,
                        })}
                        maxLength={inputMaxLimit || undefined}
                    />
                </div>
                <div>
                    <input
                        type="checkbox"
                        name="checkboxDone"
                        checked={completed}
                        onChange={handleSecondCheckboxChange}
                        disabled={completed}
                    />
                    <label htmlFor="checkbxDone">Done</label>
                </div>
            </form>
            <button type="submit" form="form'sSubmit">
                Add Todo
            </button>
        </>
    );
};
