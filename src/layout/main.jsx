import { Component } from 'react';
import Movies from '../components/movies';
import Preloader from '../components/preloader';
import Search from '../components/search';


const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            search: '',
            type: '',
            loading: true,
        }
        this.fetchFilm = this.fetchFilm.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.handleCheck = this.handleCheck.bind(this)
    }


    componentDidMount() {
        this.fetchFilm("matrix", this.state.type)
    }

    fetchFilm(name, type = this.state.type) {
        if (name.length < 3) return;

        this.setState({
            ...this.state,
            loading: true,
        })
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${name}&type=${type}`)
            .then(response=>response.json())
            .then(data => this.setState({
                ...this.state,
                movies: data.Search,
                loading: false,
            }))

    }

    handleSearch() {
        this.fetchFilm(this.state.search, this.state.type)
    }

    handleInput(event) {
        this.setState({
            ...this.state,
            search: event.target.value
        })
    }

    handleCheck(event) {
        this.setState(
            () => ({
                ...this.state,
                type: event.target.value
            }),
            () => {
                this.fetchFilm(this.state.search, this.state.type)
            }
        )
    }

    render() {
        const { movies, loading, type } = this.state;

        return <main className="container main">
                <Search
                    handleSearch={this.handleSearch}
                    handleInput={this.handleInput}
                    handleCheck={this.handleCheck}
                    type={type}
                />
            { loading ? <Preloader/> : <Movies movies={ movies }/> }
            </main>
    }
}

export default Main;

