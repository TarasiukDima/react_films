function Search(props) {
    const { handleInput, handleSearch, handleCheck, type } = props;
    return (
        <div className="row">
            <div className="search__wrap">
                <input
                    className="validate"
                    placeholder="search"
                    name="search"
                    type="search"
                    value={props.search}
                    onChange={handleInput}
                    onKeyDown={
                        (event) => {
                            if (event.key === 'Enter') {
                                handleSearch()
                            }
                        }
                    }
                />
                <button
                    className="waves-effect waves-light btn"
                    onClick={handleSearch}>
                    search
                </button>
            </div>

            <div className="type__wrap">
                <label>
                    <input
                        className="validate"
                        name="typeMovie"
                        type="radio"
                        value=''
                        onChange={handleCheck}
                        checked={type === ''}
                    />
                    <span>All</span>
                </label>
                <label>
                    <input
                        className="validate"
                        name="typeMovie"
                        type="radio"
                        value='movie'
                        onChange={handleCheck}
                        checked={type === 'movie'}
                    />
                    <span>movies</span>
                </label>
                <label>
                    <input
                        className="validate"
                        name="typeMovie"
                        type="radio"
                        value='series'
                        onChange={handleCheck}
                        checked={type === 'series'}
                    />
                    <span>Series</span>
                </label>
            </div>
        </div>
    );
}

export default Search;