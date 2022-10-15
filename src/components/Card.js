import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
export default function Card(props) {
  console.log(props);
  return (
    <div className="container card mt-3 ">
      <div className="row px-3 py-3">
        <div class="col-lg-3 col-sm-12">
          <img className="card-img" src={props.imageUrl}></img>
        </div>
        <div class="col-lg-9">
          <p className="location pt-1">
            <FontAwesomeIcon icon={faMapMarkerAlt} color="red"/>
            &nbsp;
            {props.location} &nbsp;
            <a className="google-url" href={props.googleMapsUrl}>
              View on Google Maps
            </a>
          </p>
          <h3 className="title">{props.title}</h3>
          <p className="date">
            {props.startDate} - {props.endDate}
          </p>
          <div className="desc">{props.description}</div>
        </div>
      </div>
    </div>
  );
}
