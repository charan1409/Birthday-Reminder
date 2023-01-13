import './UserBox.css';
import Card from "../../UI/Card";

const UserBox = (props) =>{
    return (
        <Card className='user-box'>
            <p>ID: {props.user.id}</p>
            <p>Name: {props.user.name}</p>
            <p>Email: {props.user.email}</p>
            <p>Phone Number: {props.user.phoneNumber}</p>
            <p>Date Of Birth: {props.user.DOB}</p>
        </Card>
    );
}

export default UserBox