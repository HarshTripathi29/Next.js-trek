'use client';
import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface DataItem {
    title: string;
    category: string;
    desp: string;
    para: string;
}

export interface DataContextType {
    data: DataItem[];
    setData: Dispatch<SetStateAction<DataItem[]>>;
    showDemo: boolean;
    setShowDemo: Dispatch<SetStateAction<boolean>>;
    categoryFilter: string;
    setCategoryFilter: Dispatch<SetStateAction<string>>;
}

interface DataContextProviderProps {
    children: ReactNode;
}

export const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataContextProvider: React.FC<DataContextProviderProps> = ({ children }) => {
    const [data, setData] = useState<DataItem[]>([]);
    const [showDemo, setShowDemo] = useState(false);
    const [categoryFilter, setCategoryFilter] = useState('');

    return (
        <DataContext.Provider value={{ data, setData, showDemo, setShowDemo, categoryFilter, setCategoryFilter }}>
            {children}
        </DataContext.Provider>
    );
};
