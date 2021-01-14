import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

//Creando Context
export const CategoriesContext = createContext();

//Provider contiene las funciones y el estado
const CategoriesProvider = (props) => {

    //Crear el state del Context
    const [ categories, saveCategories] = useState([]);

    //Ejecutar llamada a la API
    useEffect(() => {
        const getCategories = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const categories = await axios.get(url);
            saveCategories(categories.data.drinks);
        }
        getCategories();
    }, []);


    return(

        <CategoriesContext.Provider
            value={
                {categories}
            }
        >
            {props.children}
        </CategoriesContext.Provider>
    );

}

export default CategoriesProvider;