const PersonCard = (props) => {

    const { firstName, lastName, age, hairColor } = props;

    const alertMSG = () => {
        alert("Happy Birthday!")
    }

    return(
        <fieldset>
            <legend>PersonCard.jsx</legend>
            <div>
                <h1 style={{color:"green"}}>{lastName}, {firstName}</h1>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={alertMSG}>Birthday Button for {firstName} {lastName}</button>
            </div>
        </fieldset>
    );
}
export default PersonCard;