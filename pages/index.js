import Head from 'next/head'
import Product from '../components/Product'

export default function Home() {
  return (
    <div className='w-full container px-2 mx-auto'>
      <h1 className='w-full text-center'>Product List</h1>
      <div className="w-full grid grid-cols-2 py-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {
          [0,1,2,3,4,5,6,7,8,9,10,11].map((item, idx) => <Product key={idx} />)
        }
      </div>
    </div>
  )
}
