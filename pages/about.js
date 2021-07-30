import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Meta from '../components/Meta'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles((theme) => ({
  header : {
    marginLeft : theme.spacing(3),
    marginTop : theme.spacing(2)
  },
  typography : {
    textTransform : "capitalize",
    margin : theme.spacing(3),
    display : "block"
  },
  box : {
    background : "rgb(255, 194, 160)",
  },
  boxText : {
    textTransform : "capitalize",
    margin : theme.spacing(5),
    display : "block"
  }
}))

const About = () => {
    const classes = useStyles()
    return (
        <>

          <Meta title="Haqqımızda" />

          <Typography variant="h5" gutterBottom className={classes.header}>
              Haqqımızda
          </Typography>

          <Divider variant="middle" />

          <Typography variant="h6" gutterBottom align="center" className={classes.header}>
              Biz kimik və nə edirik ? 
          </Typography>

          <Typography variant="overline" className={classes.typography} >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, deleniti 
          </Typography>

          <Typography variant="overline" className={classes.typography} >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, deleniti ipsam est vero praesentium reprehenderit repellat hic perferendis, dicta iure blanditiis, autem alias nihil tenetur ducimus harum corporis id sapiente.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </Typography>

          <Box className={classes.box}>

          <Typography variant="overline" className={classes.boxText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, deleniti ipsam est vero praesentium reprehenderit repellat hic perferendis, dicta iure blanditiis, autem alias nihil tenetur ducimus harum corporis id sapiente.
          </Typography>

          </Box>

          <Typography variant="overline" className={classes.typography} >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, deleniti ipsam est vero praesentium reprehenderit repellat hic perferendis, dicta iure blanditiis, autem alias nihil tenetur ducimus harum corporis id sapiente.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </Typography>

      </>
    )
}

export default About