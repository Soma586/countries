import './styles.scss'
import { useContext } from 'react'
import classNames from 'classnames'
import DarkContext from '../../context'
import { FaGithub } from 'react-icons/fa'
import { FaMoon } from 'react-icons/fa'


const Header = ({handleDarkMode}) => {


    const dark = useContext(DarkContext)

    return (
        <div className={classNames("containerfluid headerContainer mb-5", dark && 'bg-lightblack text-white')}>
            <div className="container  d-flex justify-content-between">
            <div>
                <h1 className="headNav">Where in the world?</h1>
            </div>

            <div onClick={handleDarkMode}>
            <FaMoon/>
               <span className="ms-2 "> DarkMode</span>
            </div>

        </div>

        </div>
        
    )
}


export default Header