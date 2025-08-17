export default function Pagination({ page, totalCount, changePage }) {
    return (
        <div className="flex cursor-pointer justify-center items-center w-[100%]">
            <button 
                 className={`m-4  text-sm font-medium px-4 py-2 rounded  transition
                    ${page <=1 ? "bg-amber-100 cursor-not-allowed" : "bg-amber-300 hover:bg-red-500  cursor-pointer"}`}
                onClick={() => changePage(Math.max(page - 1, 1))}
                disabled={page === 1}
            >
                Previous
            </button>

            {page}

            <button 
                className={`m-4  text-sm font-medium px-4 py-2 rounded  transition
                    ${page * 2 >= totalCount ? "bg-amber-100 cursor-not-allowed" : "bg-amber-300 hover:bg-red-500  cursor-pointer"}`}
                onClick={() => changePage(page + 1)}
                disabled={page * 2 >= totalCount} // (adjust multiplier if your limit changes)
            >
                Next
            </button>
        </div>
    );
}
