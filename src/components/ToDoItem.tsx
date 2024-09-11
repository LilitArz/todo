import { SetStateAction, useContext, useState } from 'react';
import { ITodo } from '../utils/helpers/types';
import { ToDoContext } from '../utils/helpers/contexts';

interface Props {
    todo: ITodo;
}
export const ToDoItem: React.FC<Props> = ({ todo }) => {
    const { remove, complete, update } = useContext(ToDoContext);
    const [editedText, setEditedText] = useState<string>('');

    const handleSaveClick = () => {
        if (editedText.trim()) {
            setEditedText('');
            update(todo.id, editedText);
        }
    };

    const handleCancelClick = () => {
        setEditedText('');
    };

    const handleEditedText = (e: { target: { value: SetStateAction<string> } }) => {
        setEditedText(e.target.value);
    };

    return (
        <div className="item">
            <input type="checkbox" checked={todo.completed} onChange={() => complete(todo.id)} />
            {editedText ? (
                <div>
                    <input
                        type="text"
                        value={editedText}
                        onChange={handleEditedText}
                        className="edit-input"
                    />
                    <button onClick={handleSaveClick} className="save-button">
                        <img
                            alt="Ok"
                            src="https://cdn4.iconfinder.com/data/icons/icocentre-free-icons/137/f-check_256-256.png"
                        />
                    </button>
                    <button onClick={handleCancelClick} className="cancel-button">
                        <img
                            alt="cancel"
                            src="https://cdn0.iconfinder.com/data/icons/round-ui-icons/512/close_red.png"
                        />
                    </button>
                </div>
            ) : (
                <p className={todo.completed ? 'complete' : ''}>{todo.todo}</p>
            )}

            <button onClick={() => remove(todo.id)}>
                <img
                    alt="Delete"
                    src="https://cdn1.iconfinder.com/data/icons/jumpicon-basic-ui-glyph-1/32/-_Trash-Can--256.png"
                />
            </button>
            <button onClick={() => setEditedText(todo.todo)}>
                <img
                    alt="Edit"
                    src="https://cdn4.iconfinder.com/data/icons/basic-ui-2-line/32/pencil-edit-write-draw-stationary-512.png"
                />
            </button>
        </div>
    );
};
