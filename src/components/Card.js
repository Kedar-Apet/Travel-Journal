
export default function Card(props){
    console.log(props)
    return(
        <div className="card">
                <img className="card-img" src={props.imageUrl}></img>
                <p className="location">{props.location}</p>
                <p><a href={props.googleMapsUrl}/></p>
                <h3 className="title">{props.title}</h3>
                <div className="desc">{props.description}</div>
                <p className="date">{props.startDate} - {props.endDate}</p>
              
        </div>
    )
}