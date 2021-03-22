


const TopSearch = ({coords}) => {
    console.log('Triggered TopSearch')
    return (
        <div className="wrapper bg-white shadow-md rounded-md mt-5">
            <div className="w-full p-2">
                <div className="w-full flex justify-evenly border-b py-3 border-gray-200">
                    <h2 className="text-gray-500"><span className="hover:border-b-2 hover:text-red-500 border-red-500 pb capitalize">Chat</span></h2>
                    <h2 className="text-gray-500"><span className="hover:border-b-2 hover:text-red-500 border-red-500 pb capitalize">Invitations</span></h2>
                </div>
                <div className="w-full">
                    Please login to chat
                </div>
            </div>
            <style jsx>{`
                .wrapper {
                    position: fixed;
                    width: ${coords.width}px;
                    top: ${coords.y + coords.height}px;
                    left: ${coords.left}px;
                    z-index: 5000;
                }
            `}</style>
        </div>  
    )
};

export default TopSearch;