import Typography  from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Meta from '../components/Meta'


const NotFound = () => {
  const router = useRouter() 

  useEffect(() => {
      setTimeout(() => {
          router.push('/')
      }, 7000)
  }, [])

  return (
      <>
        <Meta title="Page is not found" />
        <Box my={20}>
            <Typography variant="h5" align="center" paragraph >
                Sorry
            </Typography>

            <Typography variant="body2" align="center" paragraph>
                Seems that page does not exist
            </Typography> 
            <Typography variant="body2" align="center" paragraph>
                Redirecting to <Link href="/" style={{ color : "blue"}}> Home Page</Link>
            </Typography>
        </Box>
      </>
    )
}

export default NotFound