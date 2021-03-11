import { useRouter } from 'next/router';


const Product = () => {

    const location = useRouter();

    return (
        <div onClick={() => location.push('/products/id')} className="group w-full rounded-md bg-white cursor-pointer">
            <div className="p-4">
                <div className="w-full overflow-hidden">
                    <img className="w-full transform group-hover:scale-50" src="https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiJtZWRpYS5ldmFseS5jb20uYmQiLCJrZXkiOiJtZWRpYS9pbWFnZXMvNzljMDAyODEwMjEzLXJ0Yi0wMDgucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb250YWluIn0sImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9LCJmbGF0dGVuIjp0cnVlLCJqcGVnIjp7InF1YWxpdHkiOjkwfX19" alt="Product Snapshot" className="w-full h-full"/>
                </div>
                <div className="description space-y-2 w-full">
                    <p className="title text-gray-400">
                        Xiaomi Polyester Backpack - Magenta - (RTB-008)
                    </p>
                    <h3 className="price line-through text-gray-300">&#2547;1070</h3>
                    <h3 className="discounted-price text-gray-500 font-bold">&#2547;1070</h3>
                </div>
            </div>
        </div>
    )
};


export default Product;