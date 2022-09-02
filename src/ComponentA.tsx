import React from "react"
import { ComponentB } from "./ComponentB"

export const NameContext = React.createContext("")
export const ComponentA = () => {

    return (
        <div>
            <NameContext.Provider value="Arkadi">
                <ComponentB />
            </NameContext.Provider>
        </div>
    )
} 