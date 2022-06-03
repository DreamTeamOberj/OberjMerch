import styles from '../styles/Home.module.css'
import Link from 'next/link'

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
    <a href="productCreate" className="btn btn-outline-dark">Nouveau Product</a>
      <div>
            {products.data.map(product => (
              <>
              <div id={styles.card} className="card">
                <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">{product.price}</p>
                <Link href={product.id} key={product.id}>
                  <a>Detail</a>
                </Link>
                <a href="#" className="btn btn-warning">Edit</a>
                </div>
              </div>
              </>              
            ))}
      </div>
    </div>
  )
}

export default Products