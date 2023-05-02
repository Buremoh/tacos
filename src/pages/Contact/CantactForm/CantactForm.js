import React from 'react'
import './CantactForm.css'

import bgImage from '../../../assets/cake.jpg'

const CantactForm = () => {
  return (
    <div className='section'>
        <div className='container grid-container contact-content'>
            <div>
                <h1 className='heading-secondary'>
                    get in <span>touch</span>
                </h1>

                <p>We'd love to hear from you. Feel free to reach out to us, let's know how your experience was.</p>

                <img src={bgImage} alt="get in touch" />

                <p>You're welcome to visit again and again. We'd love to have you back.</p>
            </div>

            <div>
                <h1 className='heading-secondary'>
                    Mail <span>us</span>
                </h1>

                <form>
                    <div className='form-field name-email'>
                        <div>
                            <label>Name</label>
                            <input type="text" name='name' />
                        </div>

                        <div>
                            <label>Email</label>
                            <input type="email" name='email' />
                        </div>
                    </div>


                    <div className='form-field'>
                        <div>
                            <label>Subject</label>
                            <input type="text" name='subject' />
                        </div>
                    </div>

                    <div className='form-field'>
                        <div>
                            <label>Message</label>
                            <textarea type="text" name='message' />
                        </div>
                    </div>
                </form>

                <button>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default CantactForm