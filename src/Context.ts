import React from 'react'
import { INotes } from './App';

interface IContext{
    notes?: INotes[],
    noteSearch?: INotes[],
    addNotes?: (text: INotes)=>void,
    deleteNotes?: (id: number)=>void,
    editNote?: (id: number, text: string)=>void,
    searchNote?: (text: string)=>void
}

export const MyContext = React.createContext<IContext>({});