import { useContext } from 'react';
import { ContextForFilter } from '../utils/helpers/contexts';
import { FILTER_KEYS } from '../utils/enum';

const tempFilter = [
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

export const ToDoFilter: React.FC = () => {
    const { filter, setFilter } = useContext(ContextForFilter);

    const handleChange = (e: { target: { value: string } }) => {
        setFilter(+e.target.value);
    };

    return (
        <>
            <select value={filter} onChange={handleChange}>
                {tempFilter.map(({ value, label }) => {
                    return (
                        <option value={value} key={value}>
                            {label}
                        </option>
                    );
                })}
            </select>
        </>
    );
};
