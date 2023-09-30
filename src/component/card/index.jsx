import { useState, useContext } from 'react'
import './styles.scss'
import classNames from 'classnames'
import DarkContext from '../../context'


const Card = (props) => {
  const dark = useContext(DarkContext);
  const { index, flag, name, population, region, capital, handleClick } = props;

  return (
    <div
      className={classNames(
        "containerCard mb-5",
        dark && "bg-lightblack text-white"
      )}
      onClick={() => handleClick(index)}
    >
      <img className="flag" src={flag} />

      <div className="desc">
        <h4 className="mt-3">{name}</h4>

        <p>Population: {population.toLocaleString("en-US")}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
      </div>
    </div>
  );
};

export default Card