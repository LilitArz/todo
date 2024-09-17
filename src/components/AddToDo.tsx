import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ToDoContext } from '../utils/helpers/contexts';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

interface IFormInput {
    title: string;
    requiredCheckbox: boolean;
    doneCheckbox: boolean;
    maxCharacters?: number
}

export const AddToDos = () => {
    const { addTodo } = useContext(ToDoContext);
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required('Fill the field'),
        requiredCheckbox: Yup.boolean().required(),
        doneCheckbox: Yup.boolean().required(),
        // maxCharacters: Yup.number().nullable()
    });

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<IFormInput>({
        resolver: yupResolver(validationSchema),
    });

    const isRequiredChecked = watch('requiredCheckbox', false);
    const isDoneChecked = watch('doneCheckbox', false);
    const maxCharacters = watch('maxCharacters');

    const isAddButtonDisabled = isRequiredChecked ? !isDoneChecked : false;

    const handleAdd: SubmitHandler<IFormInput> = (data) => {
        const newTodo = {
            todo: data.title,
            completed: data.doneCheckbox,
            userId: 1,
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
                        {...register("requiredCheckbox")}
                    />
                    <label htmlFor="required">Required</label>
                </div>

                <div>
                    <input
                        type="number"
                        placeholder="Max characters"
                        {...register("maxCharacters")}
                        min={0}
                    />
                </div>

                <div>
                    {errors.title && <p style={{ color: 'red' }}>{errors.title.message}</p>}
                    <input
                        type="text"
                        {...register('title')}
                        maxLength={maxCharacters}
                    />
                </div>

                <div>
                    <input
                        type="checkbox"
                        id="done"
                        {...register("doneCheckbox")}
                    />
                    <label htmlFor="done">Done</label>
                </div>

                <button 
                    type="submit" 
                    form="formSubmit" 
                    disabled={isAddButtonDisabled}>
                    Add Todo
                </button>
            </form>
        </>
    );
};
