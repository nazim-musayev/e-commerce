import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import HelpPage from './HelpPage'

const useStyles = makeStyles({
    root : {
        background : "rgba(241, 241, 203, 1)"
    }
})

const HelpPortal = () => {
    const classes = useStyles()
    return (
        <Box position="fixed" bottom={17} right={20} width="25%" height="80%" zIndex="modal"
         border={1} borderColor="text.primary" className={classes.root}>
            <HelpPage />
        </Box>
    )
}

export default HelpPortal
