import React from 'react';
import './FeaturedMovie.css';

const FeaturedMovie = ({ item }) => {
    let firstDate = new Date(item.first_air_date);
    let genres = [];
    
    for (let i in item.genres) {
        genres.push( item.genres[i].name )
    }
    
    let description = item.overview;

    if(description.length > 200) {
        description = description.substring(0, 200) + '...';
    }

    return (
        <section className='featured' style={{
            backgroundSize: 'cover', backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className='featuredVertical'>
                <div className='featuredHorizontal'>
                    <div className='featuredName'>
                        {item.original_name}
                    </div>
                    <div className='featuredInfo'>
                        <div className='featuredPoints'>
                            {item.vote_average} pontos
                        </div>
                        <div className='featuredYear'>
                            {firstDate.getFullYear()}
                        </div>
                        <div className='featuredSeasons'>
                            {item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}
                        </div>
                        <div className='featuredDescription'>
                            {item.overview}
                        </div>
                        <div className='featuredButtons'>
                            <a className='watchButton' href={`/watch/${item.id}`}>▶ Assistir</a>
                            <a className='addButton' href={`/list/add/${item.id}`}>+ Minha Lista</a>
                        </div>
                        <div className='featuredGenres'>
                          <strong>Gêneros:</strong>  {genres.join(', ')}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturedMovie;