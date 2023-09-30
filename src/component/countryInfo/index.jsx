import _ from "lodash";
import { useContext } from "react";
import "./styles.scss";
//import DarkContext from './context';
import DarkContext from "../../context";
import classNames from "classnames";
import { FaArrowCircleLeft } from "react-icons/fa";

const CountryInfo = (props) => {
  const dark = useContext(DarkContext);

  const {
    img,
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    bordercountries,
    nativeName,
    borders,
    handleclick,
  } = props;

  console.log(props);

  // const displayCur = _
  const cur = Object.keys(currencies);

  const displayCurrencies = _.join(cur, ", ");

  const formatCapital = _.join(capital, ", ");

  //const formatLanguage = _.join(languauges,)

  let arr = [];
  const lang = Object.keys(languages);

  for (let x of lang) {
    arr.push(_.get(languages, x));
  }

  const formatLang = _.join(arr, ", ");

  //i need bootstrap
  return (
    <div className={classNames("container ")}>
      <div className="row w-100">
        <div className="col-xl-6">
          <button className="backButton mb-5" onClick={handleclick}>
            <FaArrowCircleLeft />
            <span className="ms-3">back</span>
          </button>

          <div>
            <img className="infoFlag" src={_.get(props.flags, "svg")} />
          </div>
        </div>

        <div className="col-xl-6 ">
          <div className="descBuffer">
            <h3 className={classNames(dark && "text-white")}> {name} </h3>

            <div
              className={classNames(
                "d-md-flex justify-space-between",
                dark && "text-white"
              )}
            >
              <div className={classNames("mb-5 me-4")}>
                <p>Population: {population.toLocaleString("en-US")}</p>
                <p>Region: {region}</p>
                <p>Sub Region: {subregion}</p>
                <p>Capital: {formatCapital}</p>
              </div>

              <div>
                <p>Top Level Domain: {tld}</p>
                <p>Currencies: {displayCurrencies}</p>
                <p>Languages: {formatLang}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
