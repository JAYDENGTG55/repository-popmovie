function Search({ query, handleChangeQuery}) {
    return  (
        <input
            className="search"
            type="text"
            placeholder="Search movie..."
            value={query}
            onChange={handleChangeQuery}
        />
    );
}

export default Search;