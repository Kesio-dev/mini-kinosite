import React from 'react';  // Тут понятно
import axios from 'axios';  // Тут понятно
import Movie from './Movie.js';  // Тут понятно
import Loader from './Loader.js';
import './App.css'

class App extends React.Component {  // Тут понятно

  state = { // Создаем стейт для постоянных обьектов
    isLoading: true, // Это загрузка на сайт, что бы чел не зашел раньше чем нужно
    movies: [] // Просто так, что бы понимать, что мы получаем
  }

  getMovies = async () => { // Создаем функцию асинхронную для получиния данных с АПИ
    const { // Константа
      data: { // Проводим путь, что бы не прописывать movies.data.data.movies
        data: { movies },
      },
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating'); // Делаем эвэит и получаем кино с АПИ
    this.setState({ movies: movies, isLoading: false }) // Изменяем стейт, что добавить в него кино и изменить =>
    // => значение загрузки сайта на то, что все норм
  }

  componentDidMount() { // Это штука с Реакта которая делается перед рендером всего сайта, например загрузка АПИ
    this.getMovies();  // Вызываем функцию выше
  }

  render() {  // Тут понятно
    const { isLoading, movies } = this.state; // Что-бы не прописывать this.state.isLoading, а писать сразу isLoading

    return (  // Тут понятно
      <div> {/* А ниже танцы с бубнами... */}
        <section className='container'>{isLoading ? <Loader /> : movies.map(movie => {
          /* Если isLoading равна тру, то сайт грузит, а если фалсе => */ 
          /* => То значит сайт загрузил все видосы с АПИ*/ 
          //console.log(movie) /* Вывод всех фильмов в консоль, по идее не нужная штука */
          return <div className='movies'><Movie /* Возравщаем инфу для .map, что бы он отобразил наши пропсы с другого компанента */
            key={movie.id} // Инвидидуальная хуйня, что-бы реакт не ругался
            id={movie.id} // Такая же индивидуальная хуйня, но уже от АПИ
            year={movie.year}  // Тут понятно
            title={movie.title}  // Тут понятно
            summary={movie.summary}  // Тут понятно
            medium_cover_image={movie.medium_cover_image} />
          </div>  // Тут понятно
        })} </section>
      </div>
    )
  }
}

export default App;  // Тут понятно