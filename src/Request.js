const key='4521e606dd0423cd51045853191094c2'

const requests={
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
    //requestTrending: `https://api.themoviedb.org/3/trending/movie/{time_window}?api_key=${key}`,
    //<Row rowID='4' title='Trending' fetchURL={requests.requestTrending} />
    requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`

};

export default requests