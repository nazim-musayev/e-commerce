import { makeStyles } from '@material-ui/core/styles'
import SearchPage from './SearchPage'
import ScrollToTop from "./ScrollToTop"
import SearchBar from './SearchBar'
import Navbar from './Navbar'
import Footer from './Footer'
import HelpButton from './HelpButton'
import HelpPage from './HelpPage'
import Meta from "./Meta"
import { useSelector } from 'react-redux'


const useStyles = makeStyles((theme) => ({
  children : {
    
  }
}))


const Layout = ({children}) => {
  const {layout, helpPage, searchPage} = useSelector(state => state.display)
  const classes = useStyles()

    return ( 
      <>

        <Meta />

        {searchPage && <SearchPage /> }
        
        {helpPage && <HelpPage  /> }

        {layout &&  (

          <>
            <HelpButton />
            <ScrollToTop showBelow={250} />
            <Navbar />
            <SearchBar />

            <div className={classes.children}>
              {children}
            </div>
            
            <Footer />
          </>

        )}
             
      </>
    )
}

export default Layout