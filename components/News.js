import Daily from './Daily';

const News = (props) => {
     return ( 
          <div className="row">
               {props.news.map(daily => (
                    <Daily 
                         key={daily.url}
                         daily={daily}
                    />
               ))}

          </div>

      );
}
 
export default News;