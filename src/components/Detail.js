
function Detail({specialty, weight, greased, handleClick}){
    if (!handleClick){
        return specialty="";
        greased="";
        weight="";
    }

    return (
            <>
            <li>Specialty: {specialty}</li>
            <li>Weight: {weight} lbs</li>
            <li>Greased: {greased ? "Yes" : "No"}</li>
            <li>Highest Grade: {greased}</li>
            </>
    )}

export default Detail