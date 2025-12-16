import {createContext, useState, useEffect} from 'react'

export const DataContext = createContext(null)

export function DataProvider({children}){




    return (
        <DataContext.Provider value = {{}}>{children}</DataContext.Provider>
    )
}