import React from 'react';

const RecipeDetail = (props) => {
    if(!props.recipe){
       return(
           <p style={props.style}>
               Please select a recipe to see the detail.
           </p>
       ); 
    }
    return(
        <div style={props.style}>   
            <h2>{props.recipe.name}</h2>
            <img src={props.recipe.image} />
            <div>
                <span>{props.recipe.category}</span>
                <span>{props.recipe.calories}</span>
            </div>
            <h3>Ingredients</h3>
            <ul>
                {props.recipe.ingredients.map(ingredient => (
                    <li key={ingredient}>
                        {ingredient}
                    </li>
                ))}   
            </ul>
            <h3>STEPS</h3>
            <ol>
                <li>Salt to taste ($0.05)</li>
                <li>Freshly cracked pepper to taste ($0.10)</li>
                <li>Pinch crushed red pepper (optional) ($0.05)</li>
            </ol>
        </div>
    );
}

export default RecipeDetail;