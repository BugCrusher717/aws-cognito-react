import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  root: {
    height: '100vh',
  },
  hover: {
    '&:hover': { cursor: 'pointer' },
  },
})
const ProductItem: React.FunctionComponent<{}> = () => {
    const classes = useStyles()
    return (
                <Button color="secondary" variant="contained" >
                    
                </Button>
            )

}
export default ProductItem