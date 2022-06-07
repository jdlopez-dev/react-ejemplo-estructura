import Paginador from "../paginator/Paginador";
import NewItem from './NewsItem';
import NewsData from "./news.json";

function News(props) {

    let news = NewsData.map((item, index) => {
        return <NewItem key={index} {...item} />
    });
    
    return (
        <section>
            <h1>Listado noticias</h1>
            {news}
            <Paginador paginaActual={3} pagMin={2} pagMax={8} />
        </section>
    )
}
export default News;