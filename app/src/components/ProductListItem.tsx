import React, { useState, useContext, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import { Grid, Box, Typography } from '@material-ui/core'
import logoImage from '../logo.png'
import { ProductContext } from '../contexts/productContext';

interface IProductListItemProps {
  _id: string,
  _name: string,
  _description: string,
  _count: number,
  _price: number,
}

const ProductListItem = ( { _id, _name, _description, _count, _price }: IProductListItemProps ) => {
  const [count, setCount] = useState<number>(_count);
  const { setPrices, setAction } = useContext(ProductContext);
  const [price, _setPrices] = useState<number>(_price);

  useEffect(() => {
    setAction();
    setPrices(_id, price * count);
  },[count]);

  return (
    <Grid style={{ borderBottom: "1px solid #DDD"}}>
      <Box style={{ width: '100%', padding: 10 }}>
        <Box mt={3}>
          <Grid container direction="row" alignItems="center">
            <Box m={1}>
              <img src={logoImage} width={'50%'} height={'60%'} alt="logo" />
            </Box>
            <Box m={1} alignItems="center">
              <Button variant="text" style={{fontSize:30}}>{_name}</Button>
              <br></br>
              <Button variant="text" style={{fontSize:20}}>
                {_description}
              </Button>
              <Box m={1} display="flex">
                <Button color="secondary" variant="contained" onClick={()=>setCount(count-1)}>
                  -
                </Button>
                <Box px={5} mx={1} sx={{ p:1, border: '1px dashed grey'}}>
                  <Typography>{count}</Typography>
                </Box>
                <Button variant="contained" color="secondary" onClick={()=>setCount(count+ 1 )}>
                  +
                </Button>
              </Box>
              </Box>
              <Box m={1} alignItems="center">
                <Button variant="text" style={{fontSize:15}}>
                  {price * count}
                </Button>
              </Box>
          </Grid>
        </Box>
      </Box>
    </Grid>
  )
}
export default ProductListItem