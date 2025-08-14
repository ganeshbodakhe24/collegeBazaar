


export default function ImagePopUp({popupImage,onClose}){

    return(
        <>
         <div className="z-[2000] top-0 fixed flex justify-center items-center h-dvh w-full" style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
                        <div className="relative flex justify-center"> {/* relative so absolute works inside */}
        
                            {/* Close Button */}
                            <div onClick={onClose} className="absolute -top-5 right-2 sm:-right-5 rounded-[50%] bg-amber-400 size-10 flex justify-center items-center  hover:bg-amber-50 cursor-pointer">
                                <i className="fa-solid fa-xmark"></i>
                            </div>
        
                            {/* Image */}
                            <img className=" w-[80%] object-center md:max-w-100 rounded-2xl max-h-full" src={popupImage} alt="productimg" />
        
                        </div>
                    </div>
        
        </>
    )
}