import Meta from "../components/Meta"
import Card  from "../components/Card"
import SelectMenu from '../components/SelectMenu'
import Image from 'next/image'
import { makeStyles } from "@material-ui/core/styles"
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { useDispatch, useSelector } from 'react-redux'



// export const getStaticProps = async () => {
//   const res = await fetch("https://fakestoreapi.com/products")
//   const data = await res.json()

//   return {
//     props : {
//       products : data
//     }
//   }
// }

const useStyles = makeStyles((theme) => ({
  selectMenu : {
  
  }
}))

const Home = () => {
  const classes = useStyles()
  
  return (
    <Grid container>
      <Meta title="Əsas Səhifə" />

      <Grid item xs={7}></Grid>

      <Grid item xs={4}>
        <SelectMenu />
      </Grid>
  
      <Grid item container xs={12} spacing={1} >
        <Card />
      </Grid>
    
    </Grid> 
  )
}

export default Home;