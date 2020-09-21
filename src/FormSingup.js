import React from 'react'
import { Link } from 'react-router-dom';




const FormSingup = () => {
    return (
        <div className="form-content-right">
            <form className="form">
                
                <div className="form-inputs">
                    <label htmlFor='username' 
                    className='form-label'>
                        
                        
                    </label>
                    <input 
                        id='username'
                        type='text' 
                        name='username' 
                        className='form-input'
                        placeholder="Podaj pełny nr działki ew:"
                    />
                </div>
                
                <Link to='pierwsza'>
                    <button  className='form-input-btn'  >
                        Dodaj działkę
                    </button>
                </Link>
            </form>
        </div>
    )
}

export default FormSingup
