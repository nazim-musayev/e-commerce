import Container from '@material-ui/core/Container'
import SelectMenu from '../components/SelectMenu'
import Card  from "../components/Card"
import Grid from '@material-ui/core/Grid'
 

const Home = () => {
  
  return (
    <Container >
      <Grid container spacing={2}>
        <Grid item xs={5} sm={7} md={9}></Grid>

        <Grid item xs={6} sm={5} md={3}>
          <SelectMenu />
        </Grid>
  
        <Grid item container xs={12} spacing={2}>
          <Card />
        </Grid>

      </Grid> 
    </Container>
  )
}

export default Home