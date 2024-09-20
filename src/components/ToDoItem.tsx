import { SetStateAction, useContext, useState } from 'react';
import { ITodo } from '../utils/helpers/types';
import { ToDoContext } from '../utils/helpers/contexts';

interface Props {
    todoItem: ITodo;
}
export const ToDoItem: React.FC<Props> = ({ todoItem }) => {
    const { remove, complete, update } = useContext(ToDoContext);
    const [editedText, setEditedText] = useState<string>('');
    const { id, completed, todo, deadline } = todoItem;

    const handleSaveClick = () => {
        if (editedText.trim()) {
            setEditedText('');
            update(id, editedText);
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
            <input type="checkbox" checked={completed} onChange={() => complete(id)} />
            {editedText ? (
                <div>
                    <input type="text" value={editedText} onChange={handleEditedText} />
                    <button onClick={handleSaveClick}>
                        <img
                            alt="Ok"
                            src="https://cdn4.iconfinder.com/data/icons/icocentre-free-icons/137/f-check_256-256.png"
                        />
                    </button>
                    <button onClick={handleCancelClick}>
                        <img
                            alt="cancel"
                            src="https://cdn0.iconfinder.com/data/icons/round-ui-icons/512/close_red.png"
                        />
                    </button>
                </div>
            ) : (
                <div>
                    <p className={completed ? 'complete' : ''}>{todo}</p>
                    <p>{deadline}</p>
                </div>
            )}
            <button onClick={() => remove(id)}>
                <img
                    alt="Delete"
                    src="https://cdn1.iconfinder.com/data/icons/jumpicon-basic-ui-glyph-1/32/-_Trash-Can--256.png"
                />
            </button>
            <button onClick={() => setEditedText(todo)}>
                <img
                    alt="Edit"
                    src="https://cdn4.iconfinder.com/data/icons/basic-ui-2-line/32/pencil-edit-write-draw-stationary-512.png"
                />
            </button>
        </div>
    );
};
