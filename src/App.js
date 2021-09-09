import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb.js';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/Featured';
import Header from './components/Header';

const App = () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    // pégando a lista TOTAL
    const loadAll = async () => {

        let list = await Tmdb.getHomeList();
        setMovieList(list);
        
        // peganddo filme em destaque
        let originals = list.filter(i => i.slug === 'originals');
        let random = Math.floor(Math.random() * (originals[0].items.results.length - 1));
        let movieRandom = originals[0].items.results[random];
        let movieInfo = await Tmdb.getMovieInfo(movieRandom.id, 'tv')
        
        setFeaturedData(movieInfo);
      }
      
    loadAll();

  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.addEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <div className='page'>

      <Header black={blackHeader}/>

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      <section className='lista'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
          Feito com <span role="img" aria-label="coração">❤️</span> <br/>
          Direitos de imagem para Netflix<br/>
          Dados pegos do site Themoviedb.org
      </footer>

      {movieList.length <= 0 && 
        <div className="loading"></div>
      }
    </div>
  );
}

export default App;