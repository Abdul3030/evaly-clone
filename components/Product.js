import { useRouter } from 'next/router';
import Image from 'next/image';

const Product = ({item}) => {

    const location = useRouter();
    const { id, title, image, price, discount} = item;

    return (
        <div onClick={() => location.push(`/products/${id}`)} className="group w-full rounded-md bg-white cursor-pointer">
            <div className="p-4">
                <div className="w-full overflow-hidden">
                    <img
                    className="w-full z-0 h-full transition-transform duration-500 transform group-hover:scale-110" 
                    src={image}
                    alt="Product Snapshot" 
                    />
                </div>
                <div className="description space-y-2 w-full">
                    <p className="title text-gray-500 text-xs md:text-base">
                        {title}
                    </p>
                    <h3 className="price line-through text-gray-300 text-sm md:text-base">&#2547;{price}</h3>
                    <h3 className="discounted-price text-gray-500 text-sm md:text-base font-bold">&#2547;{Math.round(price - price * (discount / 100))}</h3>
                </div>
            </div>
        </div>
    )
};


export default Product;