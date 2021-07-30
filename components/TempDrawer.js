import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid'
import { GrFormClose } from 'react-icons/gr'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { RiMenuFoldLine } from 'react-icons/ri'
import IconButton  from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import {useRouter} from 'next/router'
import {useState} from 'react'
import Footer from './Footer'
import CallUs from './CallUs'


const useStyles = makeStyles((theme) => ({ 
  closeIcon : {
    padding : theme.spacing(1)
  }
}));

const TempDrawer = () => {
  const [drawer, setDrawer] = useState(false)
  const router = useRouter()
  const {route} = useRouter()
  const classes = useStyles();

  const handleDrawer = () => {
    setDrawer(!drawer)
  }

  const menuItems = [
    {
      text : "Yeməklər",
      path : "/", 
    },
    {
      text : "Salatlar",
      path : "/", 
    },
    {
      text : "Şirniyyat",
      path : "/", 
    },
    {
      text : "FAQ",
      path : "/"
    }
   ]

  return (
    <>
      <IconButton color="primary" onClick={handleDrawer}>
        <RiMenuFoldLine />
      </IconButton>
      <Drawer open={drawer} onClose={handleDrawer} variant="temporary">
        <CallUs />
        <Grid container justify="flex-end" direction="row" className={classes.closeIcon} >
          <IconButton onClick={handleDrawer} >
            <GrFormClose />
          </IconButton>
        </Grid>
        <Divider />
        <List>
          {menuItems.map(({text, path}) => (
            <ListItem key={text} button divider
             onClick={() => { 
             setDrawer(!drawer)
             router.push(path)
             }}
            >
              <ListItemText primary={text} /> 
              <MdKeyboardArrowRight />
            </ListItem> 
            ))}
        </List>
        <Footer />
      </Drawer> 
    </>
  );
}

export default TempDrawer;