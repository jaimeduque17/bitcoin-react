import MasterPage from '../components/Master';
import Price from '../components/Price';
import News from '../components/News';
import Events from '../components/Events';
import fetch from 'isomorphic-unfetch';

const API_KEY = '67aeddb9-bd2b-48a1-8d53-11074768d9f1';

const Index = (props) => (
    <MasterPage>
        <div className="row">
            <div className="col-12">
                {/* <h2>Bitcoin price</h2>
                {console.log(props)} */}
                {/* <Price
                    price={props.bitcoinPrice}
                /> */}
            </div>
            <div className="col-md-7">
                <h2 className="my-4">News about Bitcoin</h2>
                <News
                    news={props.news}
                />
            </div>
            {/* <div className="col-md-5">
                <h2 className="my-4">Upcoming Bitcoin events</h2>
                <Events
                    events={props.events}
                />
            </div> */}
        </div>
    </MasterPage>
)

Index.getInitialProps = async () => {

    // https://api.coinmarketcap.com/v2/ticker/1/
    // const price = await fetch('https://api.coinmarketcap.com/v1/ticker/');
    const news = await fetch('https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=1bed4244f2a8452bb49f00be7252e488&language=es');
    // const events = await fetch('https://www.eventbriteapi.com/v3/events/search/?q=Bitcoin&sort_by=date&location.address=Mexico&token=5552HWP7QP3QTNQEAEWA');

    // const priceResponse = await price.json();
    const newsResponse = await news.json();
    // const eventsResponse = await events.json();

    return {
        // bitcoinPrice: priceResponse.data.quotes.USD,
        news: newsResponse.articles,
        // events: eventsResponse.events
    }
}

export default Index;