import { useEffect, useState } from "react"

export const SearchBar = ({allLanyards, setSearchedResults}) => {

    const [searchTerm, setSearchTerm] = useState()

    const handleSearch = (event) => {
        setSearchTerm(event.target.value)
    }

    useEffect(()=>{
        const searchResults = allLanyards.filter((lanyard)=>{
            if(lanyard.name.toLowerCase().includes(searchTerm.toLowerCase())){
                return lanyard
            }
        })
        setSearchedResults(searchResults)
    },[searchTerm])

    return <div className="search-bar">
        <input type="text" className="search-input" placeholder="Search" onChange={(event)=>{handleSearch(event)}}/>
    </div>
}