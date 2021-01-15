import React, { createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const RecipesContext = createContext();

const RecipesProvider = (props) => {
    
    const [ recipes, saveRecipes ] = useState([]);
    const [ search, searchRecipes ] = useState({
        name: '',
        category: ''
    });
    const [ request, saveRequest ] = useState(false);

    const { name, category } = search;

    useEffect(() => {
        if(request){
            const getRecipes = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;
                const result = await axios.get(url);
                saveRecipes(result.data.drinks);
            }
            getRecipes();
        }
        
    }, [search]);

    return (
        <RecipesContext.Provider
            value={{
                searchRecipes,
                saveRequest
            }}
        >
            {props.children}
        </RecipesContext.Provider>
    );
}

export default RecipesProvider;