import React, { useContext } from 'react';
import { CategoriesContext } from '../context/CategoriesContext';

const Form = () => {

    const { categories } = useContext(CategoriesContext);
    console.log(categories);

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
                    />
                </div>
                <div className="col-md-4">
                    <select 
                        className="form-control"
                        name="category"
                    >
                        <option value="">-- Selecciona Categoría --</option>
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