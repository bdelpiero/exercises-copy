import React from "react"

import "./Burger.css"

export const Burger = () => {
    return (
        <div className="burger">
            {/* A burger needs to be assemblied in reverse order. Remember that bread is not included in the recipe */}
            <BreadBottom />
            
            <Tomato />
            <Lettuce />
            <Meat />
            <Cheese />
            <Meat />
            
            <BreadTop /> 
        </div>
    )
}

const Ingredient = ({ name }) => (
    <div className={`ingredient ${name}`}>
        <img src={`/images/${name}.png`} />
    </div>
)

export const BreadTop = () => <Ingredient name="bread-top" />
export const BreadBottom = () => <Ingredient name="bread-bottom" />
export const Lettuce = () => <Ingredient name="lettuce" />
export const Meat = () => <Ingredient name="meat" />
export const Bacon = () => <Ingredient name="bacon" />
export const Cheese = () => <Ingredient name="cheese" />
export const Tomato = () => <Ingredient name="tomato" />
export const Cucumber = () => <Ingredient name="cucumber" />