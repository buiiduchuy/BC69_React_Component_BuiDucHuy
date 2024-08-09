// rafc
import React from 'react'

export const Banner = () => {
  return (
    <div className='py-5'>
     <div className="p-4 p-lg-5 bg-light rounded-3">
          <div className="m-md-3 m-0 m-lg-5">
              <h1 className="display-5">A warm welcome!</h1>
              <p className="fs-3">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
              <a className="btn btn-primary btn-lg" href="#!">Call to action</a>
          </div>
      </div>
    </div>
  )
}
