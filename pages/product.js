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
              {products.data[0].map(product => (
                <>
                <div id={styles.card} className="card">
                  <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}</p>
                  <p className="card-text">{product.description}</p>
                  <a href="#" className="btn btn-primary">Détail</a>
                  </div>
                </div>
                </>              
              ))}
        </div>
      </div>
    )
  }
  
  export default Products
