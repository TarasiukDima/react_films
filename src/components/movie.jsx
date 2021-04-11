function Movie(props) {
    const { Title, Year, imdbID, Type, Poster } = props;
    return <div id={imdbID} className="card">
            <div className="card-image">
            {
                (Poster === 'N/A')
                    ?
                <img src="https://via.placeholder.com/400X600/FF0000/FFFFFF?Text=Down.com" alt="poster"/>
                    :
                <img src={Poster} alt="poster"/>
            }
                <span className="card-title">{Title}</span>
                <a className="btn-floating halfway-fab waves-effect waves-light red" href="#1">
                    <i className="material-icons">+</i>
                </a>
            </div>
            <div className="card-content">
                <p>Year: {Year}</p>
                <p>Type: {Type}</p>
            </div>
        </div>
}

export default Movie;
