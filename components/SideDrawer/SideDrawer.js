import Link from "next/link"
import DrawerItem from "./DrawerItem";




const SideDrawer = ({drawerOpen, clicked}) => {

    return (
        <aside onClick={clicked} className={`h-full fixed z-50 bg-opacity-30 bg-black ${drawerOpen ? 'w-full' : 'w-0'}`}>
            <div className={`absolute top-0 left-0 ${drawerOpen ? 'w-80' : 'w-0'} overflow-hidden transition-all duration-500 ease-in-out flex flex-col justify-between min-h-screen bg-white`}>
                <div className="w-full p-6 border-b border-gray-200">
                    <div className="p-4 text-center">
                        <button className="w-full rounded-md font-bold text-sm focus:outline-none py-3 border-red-700 border text-red-700 bg-red-50">
                            <Link href='/login'>Login</Link>
                        </button>
                    </div>
                </div>
                <div className="w-full h-full">
                    <ul className="py-2">
                        {
                            Array(10).fill('1').map((i,idx) => <DrawerItem key={idx} />)
                        }
                    </ul>
                </div>
                <div className="w-full border-t p-3 border-gray-100 text-gray-700">
                    &copy; E-valy.com limited 2021
                </div>
            </div>
        </aside>
    )
};

export default SideDrawer;