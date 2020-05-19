import React from 'react'


export default function TeammateForm(props){

const {
    values,
    onInputChange,
    onSubmit,
}=props


return(

   <form className='form container' onSubmit={onSubmit}>
  
     <div className='form-group submit'>
        <h2> Add a Teamate</h2>
        <button>Submit</button>
    </div>


     <div className='form-group inputs'>
       <h4>Information</h4>

       <label>Username:&nbsp;
       <input
            type='text'
            placeholder='Type the name'
            maxLength='20'
            name='name'
            value={values.name}
            onChange={onInputChange}
          />
           </label>

           <label>Email:&nbsp;
          {/* 🔥 STEP 6 - Make an input of type `text` for email. */}
          <input
            type='text'
            placeholder='Type email'
            maxLength='20'
            name='email'
            value={values.email}
            onChange={onInputChange}
          />
        </label>

        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        <label>Role:&nbsp;
          {/* 🔥 STEP 7 - Make dropdown for role. */}
          <select name='role' value={values.role} onChange={onInputChange}>
              <option value='' >--Select a Role--</option>
              <option value='UI Design'>UI Design</option>
              <option value='Frontend Engineer'>Frontend Engineer</option>
              <option value='Backend Engineer'>Backend Engineer</option>
              <option value='Data Scientist'>Data Scientist</option>
              <option value='TL'>TL</option>
          </select>
        </label>
      </div>
    </form>


)

}