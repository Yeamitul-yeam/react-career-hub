import { NavLink } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <p>Opppsss!</p>
            <button><NavLink to='/'>Go Back</NavLink></button>
        </div>
    );
};

export default ErrorPage;