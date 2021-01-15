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
      width: 400,
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



   const { saveIdRecipe } = useContext(ModalContext);

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
                            handleClose();
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h1>Desde modal</h1>
                        </div>
                    </Modal>
                </div>
            
            
            </div>
        </div>
        
     );
}
 
export default Recipe;