import PropTypes from 'prop-types';

let Card=(props)=> {
    return (
            <div className="cards">
                <h1>{props.name}</h1>
                <div>
                    <img src={props.path} alt="poster"/>
                </div>
                <p>{props.data}</p>
            </div>
    )
}
Card.propTypes={
    name : PropTypes.string,
    path : PropTypes.string
}

export default Card;
