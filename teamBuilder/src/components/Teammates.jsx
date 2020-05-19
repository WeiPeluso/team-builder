import React from 'react'



export default function Teammates(props){

  const {information}=props

  if (!information) {
    return <h3>Working fetching your friend&apos;s details...</h3>
  }

  return (
    <div className='teamates container'>
      <h2>{information.name}</h2>
      <p>Email: {information.email}</p>
      <p>Role: {information.role}</p>
    </div>
  )
}
