import SearchIcon from '@mui/icons-material/Search';


export const SearchBar = () => {
    return (
        <div className="relative mx-auto text-gray-600 flex items-center w-full">
            <input className="bg-white h-10 px-5 pr-10 rounded-lg text-sm w-full focus:outline-none" placeholder="Odkryj mądrość senseja"/>
            <button type="submit" className=" h-full w-auto px-2 absolute right-0 top-0">
                <SearchIcon className='text-gray-600 fill-current'/>
            </button>
        </div>
    )
}