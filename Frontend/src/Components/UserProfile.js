export function UserProfile(props){
    return (
        <div>
            <h1>Hi{props.name}, you are{props.age} years old and lives in {props.location}</h1>
        </div>
    );
}