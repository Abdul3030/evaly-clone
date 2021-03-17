import Product from "../../components/Product";
import SectionHeader from "../../components/ScectionHeader";
import { shop } from '../../products';



const Products = () => {

    return (
        <div className="w-full mx-2">
            <SectionHeader title="Beauty & Cosmatics">
                <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 py-5">
                {
                    shop.products.map(product => <Product id={product.id} />)
                }
                </div>
            </SectionHeader>
        </div>
    )
};

export default Products;