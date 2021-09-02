import React from 'react'
import axios from 'axios'
import './MoviesList.css'

class MoviesList extends React.Component{
    constructor(){
        super()
        this.state = {                                  
               movies:[],
               genres:["Action","Crime","Drama","Animation","Adventure","Family","Thriller","Biography","History","Sci-Fi","Romance","War"]
        }
    }

    componentDidMount() {
        axios.get('https://wookie.codesubmit.io/movies', {
            headers : {
                'Authorization': 'Bearer Wookie2019'
            }
            })
            .then((response)=> {
               console.log("data", response.data.movies)
               const movies=response.data.movies
               this.setState({movies})
            })
            .catch((err)=> {
               console.log(err)
            })
    }
    
    render(){    
        return (
            <div >
                { this.state.genres.map(genre =>{
                           let genreTypeMovies=this.state.movies.filter((movie)=>{
                               for(let ch of movie.genres){
                                   if(ch==genre){
                                       return true
                                   }
                               }
                            })
                            return  (
                               <div className='displayGenres'>
                                <h2>{genre}</h2>  
                                <br/><br/><br/>
                                {
                                    genreTypeMovies.map(mov=>{
                                        return (
                                            <img src= {mov.poster}  alt="movie" key={mov.id}/> 
                                        )
                                    })
                                } 
                                <br/><br/><br/>
                               </div>
                              )
                    })
                }                
            </div>
        )
    }    
}
export default MoviesList