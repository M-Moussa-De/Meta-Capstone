import { Link } from 'react-router-dom';

function Card(props) {

    return(
      <div className="card">
        
        <div className="card-image">
          <figure className="image is-3">
            <img src={props.imgSrc} alt={props.title} />
          </figure>
        </div>

        <div className="card-content">
          
          <div className="media mb-0">
            <div className="media-content is-flex is-align-items-center is-justify-content-space-between">
              <p className="title is-5 has-text-weight-bold">{props.name}</p>
              <p className="subtitle is-6 has-text-weight-semibold">${props.price}</p>
            </div>
          </div>

          <div className="content">
            <p className="has-text-grey">{props.description}</p>
          </div>

          <div class="buttons is-flex is-justify-content-center">
            <Link to={`/pages/dish/${props.id}`} class="button is-info">View</Link>
            <button class="button is-success">Add to cart</button>
          </div>

        </div>

      </div>
    );

}

export default Card;