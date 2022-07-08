import React, { useContext, useState } from 'react'
import { Box, Button, Grid, Checkbox, Typography } from "@material-ui/core"
import ProductListItem from '../../components/ProductListItem'
import { ProductContext, TProduct } from '../../contexts/productContext'

const ProductItem: React.FunctionComponent<{}> = () => {
  const { total, proData } = useContext(ProductContext);
  const [data , setData] = useState<TProduct[]>(proData);
  const [reverse, setReverse] = useState<boolean>(true);

  const handleSort = () => {
    setReverse(!reverse);
    if(reverse) {
      data.sort((a, b) => {
        return (a.totalPrice) - (b.totalPrice);
      });
      setData(data);
    } else {
      setData(proData);
    }
  };

  return (
    <Grid container spacing={1} >
      <Box style={{ display: "flex", flexDirection: `${reverse ? "column" : "column-reverse"}`, width: "100%" }}>
        {
          data.map((product) => (
            <ProductListItem
              _id={product.productId}
              _name={product.productName}
              _description={product.productDescription}
              _count={product.productCount}
              _price={product.productPrice}
              key={product.productName}
            />
            ))
        }
      </Box>
      <Grid item xs={12}>
        <Box style={{ width: '100%', padding: 10 }}>
          <Box mt={3}>
            <Grid container direction="row" alignItems="center">
              <Box mt={1} style={{marginRight:'10%'}}>
                <Button color="secondary" variant="contained" >
                  EMPTY CHAT
                </Button>
              </Box>
              <Box mt={1} style={{ display: "flex", alignItems: "center", marginRight:'20%'}}>
                <Checkbox checked={reverse} onChange={handleSort} />
                <Typography>Updated</Typography>
              </Box>
              <Box mt={1}>
                <Button variant="text" style={{fontSize:30}}>
                  {total}
                </Button>
              </Box>
              </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}
export default ProductItem