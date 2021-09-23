import React from "react"
import { Grid } from "@material-ui/core"
import Product from "./Product/Product"

import useStyles from "./styles"

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Reebok",
    price: "$5",
    image:
      "https://footwearnews.com/wp-content/uploads/2021/04/rebook-club-c-85-1.jpg",
  },
  {
    id: 2,
    name: "Laptop",
    description: "Apple Macbook",
    image:
      "https://cdn.mos.cms.futurecdn.net/TAVcYGYSCVprN9LRUzQqbD-970-80.jpg.webp",
    price: "$25",
  },
]

const Products = () => {
  const classes = useStyles()

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default Products
