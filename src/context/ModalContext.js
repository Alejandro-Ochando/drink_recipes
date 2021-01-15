import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';


export const ModalContext = createContext();

const ModalProvider = (props) => {
    //Estado del provider
    const [ idrecipe, saveIdRecipe ] = useState(null);
    const [ recipeinfo, saveRecipe ] = useState({});
    
    //Con el ID, llamamos a la API
    useEffect(() => {
       
        const getRecipe = async () => {
            if(!idrecipe) return;
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idrecipe}`;
            const result = await axios.get(url);
            saveRecipe(result.data.drinks[0]);
        }
        getRecipe();

    }, [idrecipe])

    return ( 
        <ModalContext.Provider
            value={{
                recipeinfo,
                saveIdRecipe,
                saveRecipe
            }}  
        >
            {props.children}
        </ModalContext.Provider>
     );
}
 
export default ModalProvider;