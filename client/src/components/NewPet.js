import { useState } from 'react';
import axios from 'axios';
import { useNavigate, NavLink } from 'react-router-dom';


const NewPet = () => {
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [skill1, setSkill1] =useState('')
    const [skill2, setSkill2] =useState('')
    const [skill3, setSkill3] =useState('')
    const [description, setDescription] = useState('')
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pets', { name, type, skill1, skill2, skill3, description })
            .then((res) => {
                console.log(res.data);
                navigate('/');
            })
            .catch((err) => {
                setErrors(err.response.data.errors);
            })
    };

    return (
        <div>
            <div className='d-flex justify-content-between'>
                <h1>Know a pet needing a home?</h1>
                <NavLink to="/" className="d-flex justify-content-end fs-4">Back to Home</NavLink>
            </div>
            <form onSubmit={handleSubmit} >
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
                <button type="submit" className="btn btn-primary mt-3">Add Pet</button>
            </form>
        </div>
    );
};

export default NewPet;
