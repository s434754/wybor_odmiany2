import React from 'react'
import { Link } from 'react-router-dom';




const FormSingup4 = () => {
    return (
        <div className="form-content-right2">
            <form className="form4">
                
                <div className="form-inputs_kreator1_1">
                    <label htmlFor='nazwa' 
                    className='form-label_kreator1'>
                        Zasobność gleby:
                        
                    </label>
                    <input 
                        id='P2O5'
                        type='text' 
                        name='P2O5' 
                        className='form-input_kreator1'
                        placeholder="P2O5"
                    />
                </div>
                <div className="form-label_kreator2_2">
                    <input 
                        id='K2O'
                        type='text' 
                        name='K2O' 
                        className='form-input_kreator2_2'
                        placeholder="K2O"
                    />
                </div>
                <div className="form-label_kreator3_3">
                    <input 
                        id='Mg'
                        type='text' 
                        name='Mg' 
                        className='form-input_kreator3_3'
                        placeholder="Mg"
                    />
                </div>
                <div className="form-label_kreator4_4">
                    <input 
                        id='ph'
                        type='text' 
                        name='ph' 
                        className='form-input_kreator4_4'
                        placeholder="ph"
                    />
                </div>
                <div className="form-label_kreator5_5">
                    <label htmlFor='intensywnosc' 
                    className='form-label_kreator5'>
                        Intensywność uprawy:
                        
                    </label>
                    <input 
                        id='intensywnosc'
                        type='text' 
                        name='intensywnosc' 
                        className='form-input_kreator5_5'
                        
                    />
                </div>
                <div className="form-label_kreator6_6">
                    <label htmlFor='zmianowanie' 
                    className='form-label_kreator6'>
                        Roślina w zmianowaniu (w danym roku):
                        
                    </label>
                    <input 
                        id='zmianowanie'
                        type='text' 
                        name='zmianowanie' 
                        className='form-input_kreator6_6'
                        
                    />
                </div>
                <div className="form-label_kreator7_7">
                    <label htmlFor='przedplon' 
                    className='form-label_kreator7'>
                        Przedplon:
                        
                    </label>
                    <input 
                        id='przedplon'
                        type='text' 
                        name='zprzedplon' 
                        className='form-input_kreator7_7'
                        
                    />
                </div>
                <div className="form-label_kreator8_8">
                    <label htmlFor='nawoz' 
                    className='form-label_kreator8'>
                        Czy nawożenie obornikiem:
                        
                    </label>
                    <input 
                        id='nawoz'
                        type='text' 
                        name='nawoz' 
                        className='form-input_kreator8_8'
                        
                    />
                </div>
                <div className="form-label_kreator9_9">
                    <label htmlFor='dawka' 
                    className='form-label_kreator9'>
                        Dawka (t/ha):
                        
                    </label>
                    <input 
                        id='dawka'
                        type='text' 
                        name='dawka' 
                        className='form-input_kreator9_9'
                        
                    />
                </div>
                <div className="form-label_kreator10_10">
                    <label htmlFor='sloma' 
                    className='form-label_kreator10'>
                        Gospodarowanie słomą:
                        
                    </label>
                    <input 
                        id='sloma'
                        type='text' 
                        name='sloma' 
                        className='form-input_kreator10_10'
                        
                    />
                </div>
                <div className="form-label_kreator11_11">
                    <label htmlFor='praktyki' 
                    className='form-label_kreator11'>
                        Praktyki klim.-środ:
                        
                    </label>
                    <input 
                        id='praktyki'
                        type='text' 
                        name='praktyki' 
                        className='form-input_kreator11_11'
                        
                    />
                </div>
                <Link to='piata'>
                    <button  className='form-input-btn-odmiana1'  >
                        Dalej
                    </button>
                    
                </Link>
                <Link to='trzecia'>
                    
                    <button  className='form-input-btn-odmiana2'  >
                        Wróć
                    </button>
                </Link>
                
                
            </form>
            
        </div>
        
    )
}

export default FormSingup4