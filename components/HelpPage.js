import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles } from "@material-ui/core/styles"
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton  from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'
import { GrFormClose } from 'react-icons/gr'
import HelpDialog from './HelpDialog'
import { displayLayout, displayDialog, sendMessage } from '../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'


const useStyles = makeStyles((theme) => ({
    header : {
        background : "rgb(255, 124, 140)",
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
        padding : theme.spacing(2)
    },
    button : {
        position : "fixed",
        bottom : "3vh",
        right : "4vh",
        width : "120px",
        margin : theme.spacing(0,1,2,0),
        textTransform : "capitalize",
        background : "rgb(255, 124, 140)",
        "&:hover" : {
            background : "rgb(255, 90, 140)"
        }
    }
  }))

const HelpPage = () => {
    const dispatch = useDispatch()
    const classes = useStyles()

    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .required('Name is required'),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        question : Yup.string()
            .required('Question is required')
            .min(10, 'Question must be at least 10 characters')
    })

    const {register, handleSubmit, reset, formState : {errors} } = useForm({
    resolver: yupResolver(validationSchema)
    })

    const onSubmit = data => {
        dispatch(sendMessage(data))
        reset()
        dispatch(displayDialog())
      }
    
    const handleBack = () => {
        dispatch(displayLayout())
    }

    return (
       <>
        <div className={classes.header}>
            
            <Typography align="center" display="inline" className={classes.title}>
                Send a message
            </Typography>
            
            <IconButton  className={classes.formClose} onClick={handleBack}>
               <GrFormClose />
            </IconButton>
        
        </div>

        <form noValidate autoComplete="off" className={classes.form} onSubmit={handleSubmit(onSubmit)}>

            <Typography>
               Name :
            </Typography>

            <TextField required name="name" color="secondary" variant="outlined" fullWidth 
             margin="normal" {...register('firstName')} error={errors.firstName ? true : false}
             helperText={errors.firstName?.message}/>

            <Typography >
               Email Address :
            </Typography>

            <TextField required name="email" color="secondary" variant="outlined" fullWidth
             margin="normal" {...register('email')} error={errors.email ? true : false}
             helperText={errors.email?.message} />

            <Typography>
               What is your question?
            </Typography>

            <TextField required name="question" color="secondary" variant="outlined" fullWidth 
            multiline rows="4" margin="normal" {...register('question')} 
            error={errors.question ? true : false} helperText={errors.question?.message}/>

            <Button className={classes.button} type="submit">
                Submit
            </Button>

        </form> 

        <HelpDialog />

        </>  
    )
}

export default HelpPage
