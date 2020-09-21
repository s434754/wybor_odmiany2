import React from 'react'
import { Link } from 'react-router-dom';




const FormSingup2 = () => {
    return (
        <div className="form-content-right2">
            <form className="form2">
                
                <div className="form-inputs2">
                    <label htmlFor='nazwa' 
                    className='form-label2'>
                        Nazwa
                        
                    </label>
                    <input 
                        id='nazwa'
                        type='text' 
                        name='nazwa' 
                        className='form-input2'
                        placeholder="Nazwa"
                    />
                </div>
                <div className="form-inputs3">
                    <label htmlFor='nazwa_wlasna' 
                    className='form-label3'>
                        Nazwa własna
                        
                    </label>
                    <input 
                        id='nazwa_wlasna'
                        type='text' 
                        name='nazwa_wlasna' 
                        className='form-input3'
                        placeholder="Podaj nazwę własną"
                    />
                </div>
                <div className="form-inputs">
                    <label htmlFor='uprawa' 
                    className='form-label4'>
                        Uprawa
                        
                    </label>
                    <input 
                        id='Uprawa'
                        type='text' 
                        name='uprawa' 
                        className='form-input4'
                        placeholder="Uprawa"
                    />
                </div>
                <div className="form-inputs">
                    <label htmlFor='odmiana' 
                    className='form-label5'>
                        Odmiana
                        
                    </label>
                    <input 
                        id='odpiana'
                        type='text' 
                        name='odmiana' 
                        className='form-input5'
                        placeholder="Odmiana"
                    />
                </div>
                <div className="form-inputs">
                    <label htmlFor='Powierzchnia uprawna' 
                    className='form-label6'>
                        Powierzchnia uprawna
                        
                    </label>
                    <input 
                        id='Powierzchnia uprawna'
                        type='text' 
                        name='Powierzchnia uprawna' 
                        className='form-input6'
                        placeholder="Powierzchnia uprawna"
                    />
                </div>
                <Link to='trzecia'>
                    <button  className='form-input-btn2'  >
                        Dalej
                    </button>
                    
                </Link>
                <Link to='pierwsza'>
                    
                    <button  className='form-input-btn3'  >
                        Wróć
                    </button>
                </Link>
                
            </form>
            
        </div>
        
    )
}

export default FormSingup2
