import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, NavLink } from 'react-router-dom';


const UpdatePet = () => {
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [skill1, setSkill1] =useState('')
    const [skill2, setSkill2] =useState('')
    const [skill3, setSkill3] =useState('')
    const [description, setDescription] = useState('')
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                setName(res.data.name);
                setType(res.data.type);
                setSkill1(res.data.skill1)
                setSkill2(res.data.skill2)
                setSkill3(res.data.skill3)
                setDescription(res.data.description);
            })
            .catch(err => console.log(err));
    }, [])

    const updatePet = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/${id}`, { name, type, skill1, skill2, skill3, description })
            .then((res) => {
                console.log(res.data);
                navigate('/');
            })
            .catch((err) => setErrors(err.response.data.errors));
    };

    return (
        <div>
            <NavLink to="/" className="d-flex justify-content-end fs-4">Back to Home</NavLink>
            <h1 className="mt-5" >Edit <span className="mt-5 text-secondary">{name}</span></h1>
            <form onSubmit={updatePet}>
            <div className='d-flex fw-bold' style={{ width: 1000 }}>
                    <div style={{ width: 500 }} className='mt-5 me-5'>
                        <label className='col-sm-2 col-form-label'>Name:</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='form-control' />
                        {errors.name ? <p className="text-danger">{errors.name.message}</p> : null}
                        
                        <label className='col-sm-2 col-form-label' >Type:</label>
                        <input type="text" value={type} onChange={(e) => setType(e.target.value)} className='form-control' />
                        {errors.type ? <p className="text-danger">{errors.type.message}</p> : null}
                        
                        <label className='col-sm-2 col-form-label'>Description:</label>
                        <input type="textbox" value={description} onChange={(e) => setDescription(e.target.value)} className='form-control' />
                        {errors.description ? <p className="text-danger">{errors.description.message}</p> : null}
                    </div>
                    <div style={{ width: 500 }}>
                        <h3>Skills? (optional)</h3>
                        <label className='col-sm-2 col-form-label'>Skill 1:</label>
                        <input type="textbox" value={skill1} onChange={(e) => setSkill1(e.target.value)} className='form-control' />
                        
                        <label className='col-sm-2 col-form-label'>Skill 2:</label>
                        <input type="textbox" value={skill2} onChange={(e) => setSkill2(e.target.value)} className='form-control' />
                        
                        <label className='col-sm-2 col-form-label'>Skill 3:</label>
                        <input type="textbox" value={skill3} onChange={(e) => setSkill3(e.target.value)} className='form-control' />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Edit Pet</button>
            </form>
        </div>
    );
};

export default UpdatePet;
