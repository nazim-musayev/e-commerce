import { makeStyles } from '@material-ui/core/styles';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import IconButton from '@material-ui/core/IconButton';
import { useState, useEffect } from 'react'

const useStyles = makeStyles((theme) => ({
    toTop: {
        zIndex: 2,
        position: 'fixed',
        bottom : '3vh',
        background: "##DCDCDC",
        color: 'black',
        "&:hover, &.Mui-focusVisible": {
            transition: '0.3s',
            color: '#397BA6',
            backgroundColor: '#DCDCDC'
        },
        [theme.breakpoints.up('xs')]: {
            right: '5%',
            backgroundColor: 'rgb(220,220,220,0.7)',
        },
        [theme.breakpoints.up('lg')]: {
            right: '6.5%',
        },
    }

    
})
)

const ScrollToTop = ({showBelow}) => {
    const [show, setShow] = useState(showBelow ? false : true)
    const classes = useStyles();

    const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true)
        } else {
            if (show) setShow(false)
        }
    }

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: `smooth` })
    }

    useEffect(() => {
        if (showBelow) {
            window.addEventListener(`scroll`, handleScroll)
            return () => window.removeEventListener(`scroll`, handleScroll)
        }
    })

    return (
        <div>
            {show &&
                <IconButton onClick={handleClick} className={classes.toTop} component="span">
                    <ExpandLessIcon />
                </IconButton>
            }
        </div>
    )
}
export default ScrollToTop