import { useState } from 'react';
const PersonCard = (props) => {

    const { firstName, lastName, age, hairColor } = props;

    // const alertMSG = () => {
    //     alert("Happy Birthday!")
    // }

    const [ ages, setAges ] = useState({
        ageCount: age
    });

    const ageHandler = () =>{
        setAges({
            ageCount: ages.ageCount + 1
        })
    }

    return(
        <fieldset>
            <legend>PersonCard.jsx</legend>
            <div>
                <h1 style={{color:"green"}}>{lastName}, {firstName}</h1>
                <p>Age: {ages.ageCount}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={ageHandler}>Birthday Button for {firstName} {lastName}</button>
            </div>
        </fieldset>
    );
}
export default PersonCard;