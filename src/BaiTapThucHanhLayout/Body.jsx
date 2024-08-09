// rafc
import React from 'react'
import { Banner } from './Banner'
import { Item } from './Item'

export const Body = () => {
  return (
    //nav
    <div className='container-lg container-fluid'>
      <Banner />
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-6 mb-5">
          <Item />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-5">
          <Item />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-5">
          <Item />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-5">
          <Item />
        </div>
      </div>
    </div>
  )
}
