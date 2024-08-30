import "./SixthComponent.css";
import useFetchNews from '../../Hooks/useFetchNews.js';

const SixthComponent = () => {
    const { news } = useFetchNews();
  return (
    <div className="sixth-container">
      {news && (
        <>
          <h2>{news.title}</h2>
          <a href={news.source.url} target="_blank">
            {news.source.url}
          </a>
          <img src={news.image} alt="" />
        </>
      )}
    </div>
  );
};

export default SixthComponent;
