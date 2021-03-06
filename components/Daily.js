const Daily = (props) => {

    const {urlToImage, url, title, description, source } = props.daily;
    
    let image;

     if(urlToImage !== '') {
         image = <img src={urlToImage} alt={title} className="card-img-top" />
     } else {
          image = <p className="text-center my-5">Image Not Available</p>
     }

    return ( 
        <div className="col-md-6 col-12 mb-4">
            <div className="card">
                    <div className="card-image">
                         {image}
                    </div>
                    <div className="card-body">
                         <h3 className="card-title">{title}</h3> 
                         <p className="card-text">{description}</p>
                         <p className="card-text">{source.name}</p>
                         <a href={url} target="_blank" className="btn btn-primary d-block">
                              Read Daily
                         </a>
                    </div>
             </div>
        </div>
     );
}
 
export default Daily;