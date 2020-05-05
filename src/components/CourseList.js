import React, { Component, Fragment } from 'react';


class Courselist  extends Component{
    state = {
         is_edit:false
    }     
    renderList = () =>{
         return (
            <li>
                <span>{this.props.details.name}</span>
                <button onClick={()=> { this.toggleState() } }> Edit Course</button>
                <button onClick={()=>{this.props.deleteCourse(this.props.index)}} >Delete</button>
            </li>
         )
    }

        editCourseName = (e) => {
             e.preventDefault();
             this.props.editCourse(this.props.index,this.input.value);
             this.toggleState();
        }

    renderUpdateForm = () => {
          
        return (
             <form onSubmit={this.editCourseName}>
                 <input type="text" ref= {(v) => {this.input=v}} defaultValue={this.props.details.name}/>
                 <button >Update Course</button>
             </form>    
        );
    }
    
    toggleState = () =>{
         let {is_edit} =this.state;
         this.setState({is_edit:!is_edit});
    }

    render(){ 
     return (
       <Fragment>
          {this.state.is_edit ? this.renderUpdateForm() : this.renderList()}
       </Fragment>

   );
}

}

    

export default Courselist