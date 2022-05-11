  import styles from '../styles/Home.module.css'
  export const getStaticProps = async() => {
    const res = await fetch('http://127.0.0.1:8000/products')
    const data = await res.json()

    return {
      props: {
        products: data,
      },
    }
  }

    const Products = ({ products }) => {
    return (
      
      <div className={styles.container}>  
      <Head>
        <title>product</title>
        <meta name="Product" content="Get products" />
        <Link href="/dist/output.css" rel="stylesheet">
      </Head>
        <div>
          <ul>
              {products.data[0].map(product => (
                <><li>{product.name}</li><li className="list-group-item">{product.price}</li><li className="list-group-item">{product.description}</li></>
              ))}
          </ul>
        </div>
      </div>
    )
  }
  
  export default Products
