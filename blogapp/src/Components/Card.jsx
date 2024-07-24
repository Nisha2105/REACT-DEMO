function Card(props){
    
    return(


<div>
            <h1>Name: {props.name}</h1>
            <img src={props.image} alt="" />
            <h3>Address: {props.address}</h3>
            <h3>Address: {props.age}</h3>
        </div>

    )
}
export default Card;