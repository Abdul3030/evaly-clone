import Product from '../components/Product'
import SectionHeader from '../components/ScectionHeader'
import { shop } from '../products';
export default function Home() {
  return (
    <div className='w-full container px-2 mx-auto'>
      <h1 className='w-full text-center'>Product List</h1>
      <SectionHeader title="All Products">
        <div className="w-full grid grid-cols-2 py-5 pb-10 md:pb-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {
            shop.products.map((item, idx) => <Product key={idx} id={idx} />)
          }
        </div>
      </SectionHeader>
    </div>
  )
}
