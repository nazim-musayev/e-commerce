import { GrFacebook, GrTwitter, GrInstagram } from 'react-icons/gr'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import Button from "@material-ui/core/Button"
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { BiCopyright } from "react-icons/bi"
import { FaYoutube } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import Image from 'next/image'
import NextLink from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { addToList, setSnackBar } from '../store/actions'

const useStyles = makeStyles((theme) => ({
  root : {
    marginTop : theme.spacing(2),
    padding : theme.spacing(2),
    background : "black",
    color : "white",
  },
  about : {
    borderTop : "3px solid grey",
    borderBottom : "1px solid grey",
    padding : theme.spacing(2),
  },
  iconGrid : {
    borderBottom : "1px solid grey",
    padding : theme.spacing(3),
    marginBottom : theme.spacing(4)
  },
  submit : {
    padding : theme.spacing(1),
    marginBottom : theme.spacing(2),
    width : "120px",
  },
  svgs : {
    marginRight : theme.spacing(1)
  }
}))


const Footer = () => {
  const { subscribers } = useSelector(state => state.newsLetter)
  const dispatch = useDispatch()
  const classes = useStyles()

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid')
  })

  const {register, handleSubmit, reset, formState : {errors} } = useForm({
    resolver: yupResolver(validationSchema)
  })

  const onSubmit = data => {
    let alreadyInList = false
    
    if(subscribers.map(item => item.email).includes(data.email) === false ){
      alreadyInList = true
      const id = Math.floor(Math.random()*10000) + 1
      const subscriber = {...data, id}
      subscribers.push(subscriber)
    }

    dispatch(alreadyInList ? (setSnackBar(true, "success", "You have successfully subscribed to the newsletter."))
    : (setSnackBar(true, "error", "Your email already in list.")))

    dispatch(addToList(subscribers))
    reset()
  }
  
  const icons = [
    {
      icon : <GrFacebook />,
      path : "https://www.facebook.com/"
    },
    {
      icon : <GrTwitter />,
      path : "https://twitter.com/home"
    },
    {
      icon : <GrInstagram />,
      path : "https://www.instagram.com/"
    },
    {
      icon : <FaYoutube />,
      path : "https://www.youtube.com/"
    },
  ]

  const svgs = [ "afterpay_icon", "amex-card", "apple_pay", "discover-card", 
                 "mastercard-card", "paypal-card", "visa-card" ]

    return (
        <Grid container className={classes.root} >
        
            <Grid item xs={12}>
              <Typography variant="overline" display="block">
                Sign up to our newsletter list
              </Typography>
            </Grid>

            
            <Grid item xs={12}>

              <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)} >
                <TextField variant="outlined" margin="normal" required fullWidth id="email" 
                 label="Email Address" name="email" color="primary" notched="true"
                 {...register('email')} error={errors.email ? true : false} 
                 helperText={errors.email?.message} />

                <Button variant="contained" className={classes.submit} type="submit"
                 endIcon={<MdKeyboardArrowRight />}> 
                  Submit
                </Button>
              </form>

            </Grid>
            
            <Grid item xs={12}>
                <Typography paragraph className={classes.about} variant="body2"  >
                  <NextLink href="/about">
                    About Us
                  </NextLink>
                </Typography>
            </Grid>

          <Grid item container xs={12} justifyContent="space-around" className={classes.iconGrid} >
            {icons.map(({icon, path}) => (
              <IconButton color="primary" key={path}>
                <NextLink href={path} passHref>
                  <Link>
                    {icon}
                  </Link>
                </NextLink>
              </IconButton>
            ))}
          </Grid>

          <Box clone display="flex" mb={3} justifyContent="center">
            <Grid item container xs={12} >
              <Typography variant="body2" gutterBottom>
                All rights reserved. 2021
              </Typography>

              <Box alignSelf="center">
                <Icon fontSize="small" >
                 <BiCopyright />
                </Icon> 
              </Box>

            </Grid>
          </Box>

          <Grid item container xs={12} justifyContent="center">
            {svgs.map(svg => (
              <div key={svg} className={classes.svgs} >
                <Image src={`/${svg}.svg`} alt={svg} width={38} height={24} layout="fixed"/>
              </div>
            ))}
          </Grid>
        
        </Grid>
    )
}

export default Footer
