import React, { useEffect, useState } from 'react'

function UseEffect() {

  const [count, setCount] = useState(0)
  const [pointer, setPointer] = useState(1000)
  const [product, setProduct] = useState([])

  useEffect(() => {

    async function fetchData() {
      try {

        const response = await fetch("https://dummyjson.com/products")

        if (!response.ok) {
          throw new Error("Failed to fetch data")
        }

        const jsonData = await response.json()

        console.log(jsonData)

        // Store only the products array
        setProduct(jsonData.products)

      } catch (e) {
        console.log("Error:", e)
      }
    }

    fetchData()

  }, [])

  return (
    <div>

      <h1>UseEffect</h1>

      <h2 style={{ color: 'red' }}>
        Count = {count}
      </h2>

      <h2 style={{ color: 'blue' }}>
        Pointer = {pointer}
      </h2>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>

        <tbody>

          {product.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
            </tr>
          ))}

        </tbody>
      </table>

      <br />

      <button onClick={() => setCount(count + 10)}>
        Counter
      </button>

      <button onClick={() => setPointer(pointer + 10)}>
        Pointer
      </button>

    </div>
  )
}

export default UseEffect