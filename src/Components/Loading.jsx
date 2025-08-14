export default function Loading() {
    return (
        <>
            <div className="z-[2000] bg-amber-400]  flex justify-center items-center flex-col  fixed h-[100%] w-[100%] top-0 backdrop-blur-sm" style={{ backgroundColor: "rgba(0,0,0,0.5" }}>

                <div class="loader">
                    <div class="loader-square"></div>
                    <div class="loader-square"></div>
                    <div class="loader-square"></div>
                    <div class="loader-square"></div>
                    <div class="loader-square"></div>
                    <div class="loader-square"></div>
                    <div class="loader-square"></div>
                </div>
                <p className="pt-6 text-white text-2xl">Loading...</p>
            </div>
        </>
    )
}