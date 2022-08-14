import { useEffect, useState } from 'react'
import axios from 'axios';
import { NavLink, useNavigate, useParams } from 'react-router-dom';


const Pet = (props) => {
    const [pet, setPet] = useState({});
    const [likes, setLikes] = useState(0)
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                console.log(res.data);
                setPet(res.data);
            })
            .catch((err) => console.log("Error getting the Pet ID", err))
    }, [id])

    const deletePet = () => {
        axios.delete(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                navigate('/');

            })
    }

    const likedPet = (id) =>{
        document.getElementById(id).disabled = true;
        document.getElementById(id).innerHTML = "Liked";
        setLikes(likes + 1)
    }

    return (
        <div style={{width: 1000}}>
                <NavLink to="/" className="d-flex justify-content-end fs-4">Back to Home</NavLink>
                <div className='d-flex justify-content-end mt-3' style={{width: 1000}}>
                        <button onClick={deletePet} className='btn btn-danger w-25 fw-bold font-monospace'>Adopt {pet.name}</button>
                </div>
            <div className='card mt-5 ' >
                <div className='card-body'>
                    <h2 className='card-title '> Details about: <span className='fst-italic fw-bold text-secondary'>{pet.name}</span></h2>
                    <h4 className='card-text'> <span className='fw-bold'>Pet Type:</span> {pet.type}</h4>
                    <h4 className='card-text '> <span className='fw-bold'>Description:</span> {pet.description}</h4>
                    <h4 className='card-text'> <span className='fw-bold'>Skills:</span><div className='ms-5'>{pet.skill1}<br></br>{pet.skill2}<br></br>{pet.skill3}</div></h4>
                    <p className='mt-5'><button id={pet._id} className='btn btn-success me-3 fw-bold font-monospace' onClick={()=>likedPet(pet._id)} >Like {pet.name}</button>{likes} Like/s</p>
                </div>
            </div>
        </div>
    )
}

export default Pet;
