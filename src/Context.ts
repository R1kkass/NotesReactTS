import React from 'react'
import { INotes } from './App';

export type TStyles = {
    fontSize?: string,
    fontFamily?: string,
    color?: string
}

type TStyle = 'fontSize'| 'fontFamily' | 'color'

interface IContext{
    notes?: INotes[],
    noteSearch?: INotes[] | string,
    addNotes?: (text: INotes)=>void,
    deleteNotes?: (id: number)=>void,
    editNote?: (id: number, text: string)=>void,
    searchNote?: (text: string)=>void, 
    editStyle?: (text:string, id: number, type: TStyle)=>void
}

export const MyContext = React.createContext<IContext>({});