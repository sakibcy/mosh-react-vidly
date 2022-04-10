import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const MovieServicesDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const gotoMovies = () => {
        return navigate('/' + location.search);
    };

    const {id} = useParams();

    return ( 
        <div className='container'>
            <h1 style={{padding: '20px'}}>Movies Details: {id}</h1>
            <button style={{margin: '20px'}} type="button" class="btn btn-success" onClick={() => gotoMovies()}>Go to Movies Page</button>

        </div>
     );
}
 
export default MovieServicesDetails;