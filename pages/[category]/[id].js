import Product from '../../components/Product'
import Meta from '../../components/Meta'

export const getStaticPaths = async () => {
    const res = await fetch("https://fakestoreapi.com/products/")
    const data = await res.json()

    const paths = data.map(product => {
        return {
            params: { 
                      id : product.id.toString(),
                      category : product.category,
                    }
        }
    })
    
    return {
        paths,
        fallback : false
    }
}

export const getStaticProps = async ({params}) => {
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
    const product = await res.json()

    return {
        props : { product }
    }
}

const id = ({product}) => {
    return (
        <>
            <Meta title={product.title} />
            <Product product={product} />
        </>
    )
}

export default id
