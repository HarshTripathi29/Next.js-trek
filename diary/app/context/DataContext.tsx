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
}

interface DataContextProviderProps {
    children: ReactNode;
}

export const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataContextProvider: React.FC<DataContextProviderProps> = ({ children }) => {
    const [data, setData] = useState<DataItem[]>([]);
    const [showDemo, setShowDemo] = useState(false);

    return (
        <DataContext.Provider value={{ data, setData, showDemo, setShowDemo }}>
            {children}
        </DataContext.Provider>
    );
};


// things to keep in mind
// Correct the createContext import:
// Make sure you are importing createContext from react instead of vm.

// Define the UserContextType:
// Define the UserContextType to describe the shape of the context value.

// Initialize the data state:
// Provide an initial value for the data state.

// Import ReactNode correctly:
// Make sure to import ReactNode from react.

// what is setData: Dispatch<SetStateAction<DataItem[]>>; ?
// what is React.FC<UserContextProviderProps>?
