import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {
    
    const [ idrecipe, saveIdRecipe ] = useState(null);
    
    return ( 
        <ModalContext.Provider
            value={{
                saveIdRecipe
            }}  
        >
            {props.children}
        </ModalContext.Provider>
     );
}
 
export default ModalProvider;