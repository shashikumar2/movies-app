import React from 'react'
import axios from 'axios'
import './MoviesList.css'

class MoviesList extends React.Component{
    constructor(){
        super()
        this.state = {                                  
               movies:[],
              // genres1:["Action","Crime","Drama","Animation","Adventure","Family","Thriller","Biography","History","Sci-Fi","Romance","War"],
               genres:[]
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

               const genresarray=[]
               for(const movie of movies){                
                genresarray.push(movie.genres)
               }
               console.log("genresarray", genresarray)

               const  reqGenres1=[]
                for(const genres of genresarray){                                          
                    reqGenres1.push(...genres)                                          
               }
               console.log('reqGenres',reqGenres1)

               const genres=reqGenres1.filter(function(ele,i){
                   return reqGenres1.indexOf(ele)==i
               })
                              
               this.setState({movies, genres})
               console.log('genres',genres)
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