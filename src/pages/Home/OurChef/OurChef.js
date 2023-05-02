import React from 'react'
import './OurChef.css'

const OurChef = () => {
  return (
    <div>
        <div className='chef-img'>
            <div className='container'>
                <div className='chef-content'>
                    <h1 className='heading-primary'>
                        our <span>chef</span>
                    </h1>

                    <p className='text-white'>
                    Award winning meals, delivered by an amazing team
                    </p>
                </div>
            </div>
        </div>

        {/* chef info  */}

        <div className='container'>
            <div className='grid-container py-md'>
                <div className='grid-item chef-info'>
                    <h3 className='heading-tertiary'>
                        Marcus <span>Cole</span>
                    </h3>

                    <h4>grill chef</h4>

                    <p>Specializes in vegetable chopping, meat dicing and cheese shredding that meet our customers' specifications.</p>
                </div>

                <div className='grid-item chef-info'>
                    <h3 className='heading-tertiary'>
                        Lisa <span>Cole</span>
                    </h3>

                    <h4>executive chef</h4>

                    <p>Manages operations within the restaurant including requests for special events, parties and walk-ins.</p>
                </div>



                <div className='grid-item chef-info'>
                    <h3 className='heading-tertiary'>
                        Lara <span>Langford</span>
                    </h3>

                    <h4>CHEF DE CUISINE</h4>

                    <p>Assists the executive Chef in managing the kitchen staff, creating menus and contolling kitchen costs.</p>
                </div>



                <div className='grid-item chef-info'>
                    <h3 className='heading-tertiary'>
                        Alex <span>Deer</span>
                    </h3>

                    <h4>sous chef</h4>

                    <p>Plans how food is presented on the plate, trains new staff, troubleshot kitchen equipments and appliances.</p>
                </div>
            </div>




        </div>
    </div>
  )
}

export default OurChef