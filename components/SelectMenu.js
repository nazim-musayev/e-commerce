import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormHelperText from '@material-ui/core/FormHelperText';
import { sortBy } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux'

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
  const products = useSelector(state => state.products.items)
  const value = useSelector(state => state.products.value)
  const dispatch = useDispatch()
  const classes = useStyles()

  const handleChange = (event) => {
    dispatch(sortBy(products, event.target.value))
  }

  return (
    <div>
      <FormControl className={classes.formControl}>

        <NativeSelect onChange={handleChange} value={value}
         name="sort" className={classes.selectEmpty} >

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