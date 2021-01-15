import React, { useContext, useState } from 'react';
import { CategoriesContext } from '../context/CategoriesContext';

const Form = () => {

    const [ search, saveSearch ] = useState({
        name: '',
        category: ''
    });

    const { categories } = useContext(CategoriesContext);
    
    //Funcion para leer el contenido
    const getDataRecipe = e => {
        saveSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    return ( 
        <form
            className="col-12"
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por Categoría o Ingrediente</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name="name"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por Ingrediente"
                        onChange={getDataRecipe}
                    />
                </div>
                <div className="col-md-4">
                    <select 
                        className="form-control"
                        name="category"
                        onChange={getDataRecipe}
                    >
                        <option value="">-- Selecciona Categoría --</option>
                        {categories.map(category => (
                            <option 
                                key={category.strCategory}
                                value={category.strCategory}
                            >{category.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar Bebidas"
                    />
                </div>


            </div>
        </form>
     );
}
 
export default Form;