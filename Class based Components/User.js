function User(props){
    return(
        <div>
            <h3>{props.name}</h3>
            <h4>{props.location}</h4>
        </div>
    );
}
export default User;