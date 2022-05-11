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
        <div>
          <ul className="list-group">
              {products.data[0].map(product => (
                <><li className="list-group-item">{product.name}</li><li className="list-group-item">{product.price}</li><li className="list-group-item">{product.description}</li></>
              ))}
          </ul>
        </div>
      </div>
    )
  }
  
  export default Products
