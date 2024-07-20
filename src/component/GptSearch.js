import { BG_URL } from "../utils/constant";
import SearchBar from "./SearchBar";
import SearchSuggestion from "./SearchSuggestion";

const GptSearch=()=>{
    return(
        
        <div className="bg-white relative w-screen">
            <div className="absolute z-10">
                <img className="h-screen w-screen object-cover" src={BG_URL} alt="bg" />
            </div>
            <SearchBar/>
            <SearchSuggestion/>
        </div>
    )
}

export default GptSearch;