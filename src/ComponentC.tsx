import React, { useContext } from "react";
import {NameContext } from "./ComponentA";

export const ComponentC=()=>{

    const user_name =useContext(NameContext)

    return(
        <div>
            {user_name}
        </div>
    )
}