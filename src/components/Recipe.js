import React, { useContext, useState } from 'react';
import ModalProvider, { ModalContext } from '../context/ModalContext';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 450,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  

const Recipe = ({recipe}) => {
   
    //Configuración del modal
    const [ modalStyle ] = useState(getModalStyle);
    const [ open, setOpen ] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }


    //Extraer valores del context
   const { recipeinfo, saveIdRecipe, saveRecipe } = useContext(ModalContext);
    
   //Muestra y da formato a los ingredientes
    const showIngredients = recipeinfo => {
        let ingredients = [];
        for(let i=1; i < 16; i++){
            if(recipeinfo[`strIngredient${i}`]){
               ingredients.push (
                   <li>{recipeinfo[`strIngredient${i}`]}  {recipeinfo[`strMeasure${i}`]}</li>
               )
            }
        }

        return ingredients;
    }

    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{recipe.strDrink}</h2>
                <img className="card-img-top"  src={recipe.strDrinkThumb} alt={`Imagen de ${recipe.strDrink}`} />
                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            saveIdRecipe(recipe.idDrink)
                            handleOpen();
                        }}
                    >
                        Ver receta
                    </button>
                    
                    <Modal
                        open={open}
                        onClose={() => {
                            saveIdRecipe(null);
                            saveRecipe({});
                            handleClose();
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{recipeinfo.strDrink}</h2>
                            <h3 className="mt-4">Instrucciones</h3>
                            <p>
                               {recipeinfo.strInstructions} 
                            </p>
                            <img className="img-fluid my-4" src={recipeinfo.strDrinkThumb}/>
                            <h3>Ingredientes</h3>
                            <ul>
                                {showIngredients(recipeinfo)}
                            </ul>
                        </div>
                    </Modal>
                </div>
            
            
            </div>
        </div>
        
     );
}
 
export default Recipe;