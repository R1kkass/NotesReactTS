import React from 'react'
import { INotes } from './App';

interface IContext{
    notes?: INotes[],
    addNotes?: (text: INotes)=>void,
    deleteNotes?: (id: number)=>void,
    editNote?: (id: Number, text: string)=>void
}

export const MyContext = React.createContext<IContext>({});