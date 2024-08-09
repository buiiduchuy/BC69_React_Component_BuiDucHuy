// rafc
import React from 'react'

export const Item = () => {
  return (
    <div className="card">
      <span className='d-block bg-secondary-subtle' style={{height:150}}></span>
      <div className="card-body text-center">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <div className='d-flex justify-content-center bg-light border-top rounded-bottom-2 py-3'>
        <a href="#" className="btn btn-primary">Find Out More!</a>
      </div>
    </div>
  )
}
