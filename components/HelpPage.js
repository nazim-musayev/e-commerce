import { makeStyles } from "@material-ui/core/styles"
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton  from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'
import { GrFormClose } from 'react-icons/gr'
import HelpDialog from './HelpDialog'
import { displayLayout, displayDialog } from '../store/actions'
import { useDispatch } from 'react-redux'


const useStyles = makeStyles((theme) => ({
    header : {
        background : "rgb(255, 194, 160)",
        fontWeight : "regular",
        display : 'flex'
    },
    title : {
        flexGrow : 1,
        alignSelf : "center"
    },
    formClose : {
        "&:hover" : {
            background : "rgb(255, 150, 160)"
        }
    },
    form : {
        padding : theme.spacing(1)
    },
    button : {
        position : "fixed",
        bottom : "3vh",
        right : "4vh",
        width : "120px",
        textTransform : "capitalize",
        background : "rgb(255, 194, 160)",
        "&:hover" : {
            background : "rgb(255, 150, 160)"
        }
    }
  }))

const HelpPage = () => {
    const dispatch = useDispatch()
    const classes = useStyles()

    const handleDialog = () => {
        dispatch(displayDialog())
    }

    const handleBack = () => {
        dispatch(displayLayout())
    }

    return (
       <>
        <div className={classes.header}>
            
            <Typography align="center" display="inline" className={classes.title}>
                Bizə mesaj göndərin
            </Typography>
            
            <IconButton  className={classes.formClose} onClick={handleBack}>
               <GrFormClose />
            </IconButton>
        
        </div>

        <form noValidate autoComplete="off" className={classes.form}>

            <Typography >
               Ad, Soyad :
            </Typography>

            <TextField required name="name" color="secondary" 
            variant="outlined" fullWidth margin="normal" />

            <Typography >
               E-poçt ünvanı :
            </Typography>

            <TextField required name="name" color="secondary" 
             variant="outlined" fullWidth margin="normal" />

            <Typography>
               Sizə necə kömək edə bilərik?
            </Typography>

            <TextField required name="name" color="secondary" variant="outlined" 
             fullWidth multiline rows="4" margin="normal" />

            <Button className={classes.button} onClick={handleDialog}>
                Göndər
            </Button>

        </form> 

        <HelpDialog />

        </>  
    )
}

export default HelpPage
