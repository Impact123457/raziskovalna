import Form from "next/form";

const SearchForm = () =>{

    return(
        <Form action="/" scroll={false} className="search">
            <input 
                name="query"
                defaultValue=""
                className="search-input"
                placeholder="Website URL..."
            />
            <div className="flex gap-2 ml-auto">
                <button className="searcBtn">X</button>
                <button className="searcBtn">S</button>
            </div>
        </Form>
    )
}
export default SearchForm