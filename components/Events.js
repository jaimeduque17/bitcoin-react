import Event from '../components/Event';

const Events = (props) => {
     const eventsId = Object.keys(props.events);

     return (
          <div className="list-group">
               {eventsId.map(key => (
                    <Evento
                         key={key}
                         info={props.events[key]}
                    />
               ))}
          </div>
       );
}
 
export default Events;