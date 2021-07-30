import { GrFacebook, GrTwitter, GrInstagram } from 'react-icons/gr'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import InputBase  from "@material-ui/core/InputBase"
import IconButton from '@material-ui/core/IconButton'
import Button from "@material-ui/core/Button"
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { BiCopyright } from "react-icons/bi"
import { FaYoutube } from 'react-icons/fa'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Paper } from '@material-ui/core'



const Footer = () => {
  const [error, setError] = useState(false)
  const [color, setColor] = useState('white')
  let [email, setEmail] = useState('')
  // const { handleSubmit, register } = useForm()
  const router = useRouter()

  const useStyles = makeStyles((theme) => ({
    root : {
      padding : theme.spacing(2),
      background : "black",
      color : "white",
    },
    about : {
      borderTop : "3px solid grey",
      borderBottom : "1px solid grey",
      padding : theme.spacing(2),
      cursor : "pointer"
    },
    iconGrid : {
      borderBottom : "1px solid grey",
      padding : theme.spacing(3),
      marginBottom : theme.spacing(4)
    },
    copyRight : {
      marginRight : theme.spacing(1)
    },
    mInput : {
      // border : ({color}) => {
      //   return `1px solid ${color}`
      // },
      display : "block",
      padding : theme.spacing(1),
      marginBottom : theme.spacing(2),
      color : "white"
    },
    submit : {
      padding : theme.spacing(1),
      marginBottom : theme.spacing(2),
      width : "120px"
    },
    textField : {
      border : "1px solid white",
      color : 'white'
    }
  }))

  const classes = useStyles()
  
  const handleSubmit = (e) => {
    e.preventDefault()
  
    if(email == '') {
      setError(true)
      setColor('red')
    }
    if(email !== ''){
      setError(false)
      setColor('white')
    }
    setEmail('')
  }

  // const onSubmit = (data) => console.log({data})

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

    return (
        <Grid container className={classes.root}>
        
            <Grid item xs={12}>
              <Typography paragraph variant="overline" display="block">
                Yeni məhsullardan xəbərdar olmaq üçün 
              </Typography>
            </Grid>

            <Grid item xs={12}>

              <form noValidate autoComplete="off" onSubmit={handleSubmit} >

                <InputBase placeholder="E-poçt ünvanı" className={classes.mInput} 
                  required error={error} onChange={(e) => setEmail(e.target.value)}
                  color="secondary" name="email" value={email} readOnly={false}
                  // inputRef={register({
                  //   pattern : /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  // })} 
                  />

                <TextField variant="outlined" margin="normal" required
                 fullWidth id="email" label="E-poçt ünvanı" name="email"
                 autoComplete="email" color="primary" className={classes.textField} />

                <Button variant="contained" className={classes.submit}
                  type="submit" endIcon={<MdKeyboardArrowRight  />}> 
                  Göndər
                </Button>

              </form>
            </Grid>
            
            <Grid item xs={12}>

              <Link href="/about">
                <Typography paragraph className={classes.about} variant="body2"  >
                   HAQQIMIZDA
                </Typography>
              </Link>

            </Grid>

          

          <Grid item container xs={12} justify="space-around" className={classes.iconGrid} >
            {icons.map(({icon, path}) => (
              <IconButton color="primary" key={path} onClick={() => router.push(path)}>
                 {icon}
              </IconButton>
            ))}
          </Grid>

          <Grid item xs={12}>

          <Icon fontSize="small" className={classes.copyRight}>
            <BiCopyright />
          </Icon> 

          <Typography variant="body2">
            Bütün hüquqlar qorunur. 2021
          </Typography>

          </Grid>
        
        </Grid>
    )
}

export default Footer
