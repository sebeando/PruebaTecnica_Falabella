import React from 'react'

const PokemonThumb = ({id, image, name, type}) => {
    const style = type + " thumb-container";
    return (
        <div className={style}>
            <div className="number">#0{id}</div>
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <small>{type}</small>
            </div>
        </div>
    )
}

export default PokemonThumb