import { ProductProvider } from "../contexts/productContext";
import ProductItem from "./product/ProductItem";

const productPage: React.FunctionComponent<{}> = () => {
    return ( 
        <ProductProvider>
            <ProductItem />
        </ProductProvider>
    )
}

export default productPage;