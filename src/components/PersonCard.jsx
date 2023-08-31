const PersonCard = (props) => {

    const { firstName, lastName, age, hairColor } = props;

    const alertMSG = () => {
        alert("Happy Birthday!")
    }

    return(
        <div>
            <h1 style={{color:"green"}}>{lastName}, {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={ () => alert("Birthday Button has been clicked")}>Birthday Button for {firstName} {lastName}</button>
        </div>
    );
}
export default PersonCard;