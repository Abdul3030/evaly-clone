import PopContainer from "./Container";



const Message = ({open}) => {

    return (
        <PopContainer title="Message" open={open}>
            <div className="w-full flex justify-evenly border-b py-3 border-gray-200">
                <h2 className="text-gray-500"><span className="hover:border-b-2 hover:text-red-500 border-red-500 pb capitalize">Chat</span></h2>
                <h2 className="text-gray-500"><span className="hover:border-b-2 hover:text-red-500 border-red-500 pb capitalize">Invitations</span></h2>
            </div>
            <div className="w-full">
                Please login to chat
            </div>
        </PopContainer>
    )
};


export default Message;