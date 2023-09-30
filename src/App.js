import logo from './logo.svg';
import './App.scss';
import Card from './component/card';
import { useEffect, useState, createContext } from 'react';
import _ from 'lodash'
import CountryInfo from './component/countryInfo';
import Header from './component/Header';
import DarkContext from './context';
import classNames from 'classnames';
import Butt from './ibm';

function App() {


  
  const [isDarkMode, setDarkMode] = useState(false);

  const [data, setData] = useState([]);
  const [def, setDefault] = useState([]);
  const [input, setInput] = useState("");
  const [displayList, setdisplayList] = useState(true);
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/region/America")
      .then((res) => res.json())
      .then((res) => {
      
        setIsLoading(false);
        setData(res);
        setDefault(res);
      });
  }, []);

  const handleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  const test = (index) => {
    setdisplayList(!displayList);
    setIndex(index);
  };

  const goBack = () => {
    setdisplayList(!displayList);
  };

  const displayCountires = data.map((country, i) => {
    return (
      <Card
        index={i}
        name={_.get(country, "name.common")}
        flag={_.get(country, "flags.png")}
        capital={_.get(country, "capital[0]")}
        region={_.get(country, "region")}
        population={_.get(country, "population")}
        handleClick={test}
      />
    );
  });

  const handleChange = (e) => {
    setInput(e.target.value);
    if (e.target.value === "") {
      setData(def);

      return;
    }

    fetch(`https://restcountries.com/v3.1/name/${e.target.value}`)
      .then((res) => res.json())
      .then((res) => {
      
        if (_.get(res, "status") === 404) {
          return;
        }
        setData(res);
      })
      .catch((err) => console.log(err));
  };

  const handleSelect = (e) => {
    

    fetch(`https://restcountries.com/v3.1/region/${e.target.value}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  };

  return (
    <DarkContext.Provider value={isDarkMode}>
      <div className={classNames("App ", isDarkMode && "darkMode")}>
        <Header handleDarkMode={handleDarkMode} />

        {displayList ? (
          <div className="container h-100">
            <div className="d-lg-flex justify-content-between w-100 h-100">
              <div className="mb-4 h-100 darkplace">
                <input
                  className={classNames(
                    isDarkMode && "bg-lightblack darkplace"
                  )}
                  type="text"
                  onChange={handleChange}
                  placeholder="Search for a Country..."
                />
              </div>

              <div className="mb-4 h-100">
                <select
                  className={classNames(
                    isDarkMode && "bg-lightblack text-white"
                  )}
                  onChange={handleSelect}
                >
                  <option>Filter by Region </option>
                  <option value="Africa">Africa</option>
                  <option value="America">America</option>
                  <option value="Asia">Asia</option>
                  <option value="Europe">Europe</option>
                  <option value="Oceania">Oceania</option>
                </select>
              </div>
            </div>

            {!isLoading && <div className="test">{displayCountires}</div>}
          </div>
        ) : (
          <CountryInfo
            {...data[index]}
            handleclick={goBack}
            name={_.get(data, `[${index}].name.common`)}
          />
        )}
      </div>
    </DarkContext.Provider>
  );
}

export default App;
