import styles from '../styles/Home.module.css'

export const getStaticProps = async() => {
  const res = await fetch('http://127.0.0.1:8000/products')
  const data = await res.json()

  return {
    props: {
      productCreate: data,
    },
  }
}

  const productCreate = ({ productCreate }) => {
  return (
    
    <div className={styles.container}>  
        <form action="http://127.0.0.1:8000/product" method="post">
            <label>Name</label>
            <input type="text" id="name" name="name" />
            <label>Price</label>
            <input type="text" id="price" name="price" />
            <label>Description</label>
            <input type="text" id="description" name="description" />
            <label>Image</label>
            <input type="text" id="img" name="img" />
            <label>Is_offer</label>
            <input type="text" id="is_offer" name="is_offer" />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default productCreate