import React from 'react';

const Country = (props) => {
    // console.log(props.country);
    const {flag,name,population,capital,region} = props.country ;
    const flagStyle = {height:'50px'}
    const countryStyle = {border:'1px solid purple' ,margin:'10px',  padding:'10px' }
    const handleAddCountry = props.handleAddCountry;
    console.log(props);
    

    return (
        <div style ={countryStyle} >
            <img style ={flagStyle} src={flag} alt="" />
          <h4>This is {name} </h4> 
          <p>Population : {population}</p> 
          <p> Capital : {capital}</p>
          <p>Region : {region}</p>
          <button onClick={ ()=> handleAddCountry(props.country)} >Add country</button>

        </div>
    );
};

export default Country;