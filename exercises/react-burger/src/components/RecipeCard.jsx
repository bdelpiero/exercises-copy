import React from "react"
import { Burger } from "./Burger"
import { RecipeIngredients } from "./RecipeIngredients"

import "./RecipeCard.css"

export const RecipeCard = () => (
    <div className="recipe-card">
        <Burger />
        <div className="right-pane">
            <h1>Double Cheese Burger</h1>
            <h2>Ingredients:</h2>
            <RecipeIngredients />
        </div>
    </div>
)