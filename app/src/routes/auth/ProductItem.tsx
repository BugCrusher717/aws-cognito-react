import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Button, Grid } from "@material-ui/core"
import logoImage from '../../logo.png'
const useStyles = makeStyles({
  root: {
    height: '100vh',
  },
  hover: {
    '&:hover': { cursor: 'pointer' },
  },
})
const minuseaClicked = async () => {
  
}
const minusebClicked = async () => {
  
}
const pluseaClicked = async () => {
  
}
const plusebClicked = async () => {
  
}
const ProductItem: React.FunctionComponent<{}> = () => {
    const classes = useStyles()
    const [count,setCount]=useState(1)
    const [count1,setCount1]=useState(1)
    const [firstprice,setPrice1]=useState(1)
    const [secondprice,setPrice2]=useState(1)
    const [totalprice,setTotalprice]=useState(1)

    return (
      <Grid container spacing={1} >
        <Box style={{ flexDirection: "column", width: "100%" }}>
          <Grid item xs={12}>
            <Box style={{ width: '100%', padding: 10 }}>
              <Box mt={3}>
                <Grid container direction="row" alignItems="center">
                
                  <Box m={1}>
                    <img src={logoImage} width={'50%'} height={'60%'} alt="logo" />
                  </Box>
                  
                  
                  <Box m={1} alignItems="center">
                    <Button variant="text" style={{fontSize:30}}>PRODUCT ITEM NUMBER 1</Button>
                    <br></br>
                    <Button variant="text" style={{fontSize:20}}>
                      Description for product item number 1
                    </Button>
                    <Box m={1}>
                      <Button color="secondary" variant="contained" onClick={()=>setCount(count-1)}>
                        -
                      </Button>
                      <Box component="span" sx={{ p: 1, border: '1px dashed grey',width:10 }}>
                        <Button>{count}</Button>
                      </Box>
                      <Button variant="contained" color="secondary" onClick={()=>setCount(count+1)}>
                        +
                      </Button>
                    </Box>
                    </Box>
            
                  
                  <Box m={1} alignItems="center">
                      <Button variant="text" style={{fontSize:15}}>
                        {firstprice * count}
                      </Button>
                    </Box>
                </Grid>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box style={{ width: '100%', padding: 10 }}>
              <Box mt={3}>
                <Grid container direction="row" alignItems="center">
                  <Box m={1}>
                    <img src={logoImage} width={'50%'} height={'60%'} alt="logo" />
                  </Box>
                  <Box m={1}>
                    <Button variant="text" style={{fontSize:30}}>PRODUCT ITEM NUMBER 2</Button>
                    <br></br>
                    <Button variant="text" style={{fontSize:20}}>
                      Description for product item number 1
                    </Button>
                    <Box m={1}>
                      <Button color="secondary" variant="contained" onClick={()=>setCount1(count1-1)}>
                        -
                      </Button>
                      <Box component="span" sx={{ p: 1, border: '1px dashed grey' }}>
                        <Button>{count1}</Button>
                      </Box>
                      <Button variant="contained" color="secondary" onClick={()=>setCount1(count1+1)}>
                        +
                      </Button>
                    </Box>
      
                  </Box>
                  <Box m={1}>
                      <Button variant="text">
                        {secondprice}
                      </Button>
                    </Box>
                </Grid>
              </Box>
            </Box>
          </Grid>
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
                <Box mt={1} style={{marginRight:'20%'}}>
                    <input type="checkbox" id="topping" name="topping" value="Paneer"/>Updated
                </Box>
                <Box mt={1}>
                    <Button variant="text" style={{fontSize:30}}>
                      {totalprice}
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