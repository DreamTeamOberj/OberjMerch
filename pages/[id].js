import styles from '../styles/Home.module.css'

export const getStaticPaths = async () => {
  const res = await fetch('http://127.0.0.1:8000/products');
  const data = await res.json();

  const paths = data.map(product => {
      return {
          params: {id:product.id.toString()}
      }
  })
  return{
      paths,
      fallback: false
  }
}

export const getStaticProps = async(context) => {
    const id = context.params.id;
    const res = await fetch('http://127.0.0.1:8000/product/' + id);
    const data = await res.json();

    return{
        props: {
            product: data
        }
    }
}

const productDetail = ({product}) => {
    return (
      
      <div className={styles.container}>  
          <h1>{product.name}</h1>
          <p>{product.price}</p>
          <p>{product.description}</p>
      </div>
    )
  }
  
  export default productDetail