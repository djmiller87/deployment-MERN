import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import './PetList';

const PetList = () => {
    const [pets, setPets] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:8000/api/pets')
            .then(res => {
                console.log(res.data);
                setPets(res.data)
            })
            .catch((err) => {
                console.log("There is an error with axios");
                console.log(err);
            })
    }, [])

    const sortPets = (value) => {
        return (a,b) => 
                a[value].localeCompare(b[value]);
        }

    return (
        <div>
            <div className='d-flex justify-content-between'>
                <h3 className='fs-3 d-flex justify-content-center'>These Pets are looking for a good home:</h3>
                <NavLink to="/new" className="d-flex justify-content-end fs-4">Add a Pet to the Shelter</NavLink>
            </div>
            <table className="table table-bordered border-secondary border border-3 rounded p-2" style={{ width: 1000 }}>
                <thead>
                    <tr className='border border-dark'>
                        <th>Pet Name</th>
                        <th className='justify-content-around'>Type</th>
                        <th className='d-flex justify-content-around'>Actions</th>
                    </tr>
                </thead>
                <tbody >
                    {pets.sort(sortPets("type")).map((pet) => (
                        <tr>
                            <td>
                                <h5 >
                                    <p className='text-success'>{pet.name}</p>
                                </h5>
                            </td>
                            <td>
                                <h5>{pet.type}</h5>
                            </td>
                            <td >
                                <div className='d-flex justify-content-around'>
                                    <Link to={`/pet/${pet._id}`} > <button className='btn btn-secondary'>Details</button></Link>
                                    <Link to={`/pet/edit/${pet._id}`} ><button className='btn btn-primary text-light me-2'>Edit Pet</button></Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default PetList
