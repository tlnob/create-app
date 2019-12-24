import React from 'react';
import './style.css';

const divStyle = {
    width: '90%',
    height: 'auto   ',
    backgroundColor: 'transparent',
    display: 'flex',
    margin: '0 auto',
};

const Body = () => (
        <div className="body" style={divStyle}>
           <div className="container">
            <div className="top-container">
                <div className="image"> 
                    <img alt="breja" src="http://www.elhombre.com.br/wp-content/uploads/2018/02/IPA-cerveja.jpg" /> 
                </div>
                <div className="info">   
                    <div className="description"> 
                        <span> Produto de melhor qualidade </span>
                    </div>
                    <div className="price"> 
                        <span>R$3.000</span>
                    </div>
                    <div className="buy">
                        <button>Comprar</button>    
                    </div>
                </div>
            </div>
            </div>
        </div>
);

export default Body;