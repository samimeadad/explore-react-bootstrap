import React from 'react';

const Cards = ( props ) => {
    const { name, description, img } = props.item;
    return (
        <div className="col">
            <div className="card">
                <img style={ { height: '200px', width: '250px' } } src={ img } className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{ name }</h5>
                    <p className="card-text">{ description }</p>
                </div>
            </div>
        </div>
    );
};

export default Cards;