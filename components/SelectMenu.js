import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormHelperText from '@material-ui/core/FormHelperText';
import { sortBy } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux'
import {useEffect} from 'react'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  }
}));

export default function ControlledOpenSelect() {
  const products = useSelector(state => state.myProducts.products)
  const sortingValue = useSelector(state => state.myProducts.sortingValue)
  const dispatch = useDispatch()
  const classes = useStyles()

  const handleChange = (event) => {
    dispatch(sortBy(products, event.target.value))
  }


  return (
    <div>
      <FormControl className={classes.formControl}>

        <NativeSelect onChange={handleChange} value={sortingValue}
         name="age" className={classes.selectEmpty} >

          <option value="">None</option>
          <option value="lowest" > Price : Low To High </option>
          <option value="highest" > Price : High To Low </option>
          <option value="a-z" > A-Z </option>
          <option value="z-a" > Z-A </option>

        </NativeSelect>

        <FormHelperText>Sort By</FormHelperText>
      </FormControl>
    </div>
  );
}