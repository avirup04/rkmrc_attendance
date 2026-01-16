import React from 'react'

export default function FeatureCard(props) {
  return (
    <>
    <div className='col-md-4'>
        <div className='p-4 border rounded shadow-sm text-center'>
            {/* Line A: Dynamic icon */}
            <i className={`bi ${props.iconName} text-primary`} style={{fontSize: "2.5rem"}}></i>

            {/* Line B: Dynamic Title */}
            <h3 className='h5 fw-bold mt-2'>{props.title}</h3>

            {/* Line C: Dynamic Description */}
            <p className='text-muted'>{props.description}</p>
        </div>
    </div>
    </>
  )
}
