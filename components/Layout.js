import Container from "@material-ui/core/Container"
import Box from '@material-ui/core/Box'
import SearchPage from './SearchPage'
import ScrollToTop from "./ScrollToTop"
import SearchBar from './SearchBar'
import Navbar from './Navbar'
import Footer from './Footer'
import HelpButton from './HelpButton'
import HelpPortal from "./HelpPortal"
import HelpPage from './HelpPage'
import Meta from "./Meta"
import { useSelector, useDispatch } from 'react-redux'
import { displaySearchPage } from '../store/actions'
import SnackBar from "./SnackBar"

const Layout = ({children}) => {
  const {layout, helpPage, helpPortal, searchPage} = useSelector(state => state.display)
  const dispatch = useDispatch()

  const handleSearchBar = () => {
    dispatch(displaySearchPage())
  }

  return ( 
      <>

        <Meta />

        {searchPage && <SearchPage /> } 

        {helpPage && <HelpPage /> }

        {helpPortal && <HelpPortal />}
        
        {layout &&  (
          <>
            <Navbar />

            <Box display={{ xs : "block", md : "none"}} my={2} mx={3} onClick={handleSearchBar}>
              <SearchBar />
            </Box>
            
            <Container>
              {children}
            </Container>

            <ScrollToTop showBelow={250} />
            {!helpPortal && <HelpButton />}
            <SnackBar />
            <Footer />
          </>
        )}     
      </>
    )
}

export default Layout