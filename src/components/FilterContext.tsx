import { ReactNode, useState } from 'react';
import { ContextForFilter } from '../contexts';
import { FILTER_KEYS } from '../utils/enum';

export const FilterContext: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [filter, setFilter] = useState<number>(FILTER_KEYS.all);
    return (
        <ContextForFilter.Provider value={{ filter, setFilter }}>
            {children}
        </ContextForFilter.Provider>
    );
};
