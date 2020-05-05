import React from 'react';


const Courseform = (props) =>{

     return (
          <form onSubmit={props.addCourse}>
              <input type="text" id="Cname" value={props.current}  onChange={props.updateCourse}/>
              <button type="submit" >Add Course</button>
          </form>
     )
}



export default Courseform