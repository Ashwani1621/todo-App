function LikeButton(){
    const [liked, setLiked] = useState(true);
    return(
        <button onClick={() => setLiked(!liked)}>   
            {liked ? "Like" : "Liked"}
        </button>
    )
}

function UserProfile(props){
    return (
        <div>
            <h1>Hi{props.name}, you are{props.age} years old and lives in {props.location}</h1>
        </div>
    );
}
function Person(props){
    const [age, setAge] = useState(18);
    return(
        <div>
            <h1>Name: {props.name}</h1>
            <button onClick={() => setAge(age + 1)}>Increase Age</button>
        </div>
    );
}
function App(){
    return(
        <div>
            <UserProfile name="Ashwani" age="22" location="Prayagraj"/>
            <LikeButton/>
            <Person name="Ashwani"/>
        </div>
    );
}

