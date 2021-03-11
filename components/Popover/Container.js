import { useState } from "react";




const PopContainer = ({title, open, children}) => {

    return (
        <div className={`popover ${!open ? 'hidden' : null} overflow-hidden bg-white rounded-2xl shadow-lg absolute top-full right-0 z-10`}>
            <div className="w-full bg-gray-300 p-3">
                <h3 className="px-2">{title}</h3>
            </div>
            <div className="w-full bg-white">
                {children}
            </div>
            <style jsx>{`
                .popover{
                    min-width: 400px;
                    min-height: 400px;
                    z-index: 500;
                }
            `}</style>
        </div>
    )
};

export default PopContainer;