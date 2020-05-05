import React, { Component } from 'react';
import CourseForm from './components/Courseform';
import Courselist from './components/CourseList';
import Error      from './components/Error';

class App extends Component{
    
  state= {
    courses:[
      {name:'htnl'},
      {name:'css'},
      {name:'jquery'}
    ],
    current:'',
    error  :''
  }

  updateCourse = (e) =>{
    this.setState({
      current:e.target.value
    })
  }

  addCourse = (e) =>{
    e.preventDefault();

    if(e.target.Cname.value === '')
    {
       this.setState({error:'Please Enter Course Name !!!'});
       return false;
    }
    let current = this.state.current;
    let courses = this.state.courses;
    courses.push({name:current});
     
    
    this.setState({courses,current:''});
    
    console.log('course Added');
  }
  
  deleteCourse = (index) =>{
     
    let courses = this.state.courses;

    courses.splice(index,1);
     
    this.setState({courses});

  }

  editCourse = (index,value) => {
      
    if(value === '')
    {  
       this.setState({error:'Please do not leave Course Name Empty!!!'});
      // console.log(this.state.error);
       return false;
    }
    let courses = this.state.courses;
    let course  = courses[index];
    
    course['name'] = value;
    this.setState({courses});
  }

  

  render(){
    const {courses} = this.state;
    const data      = courses.map( (course,index) => {
             
     return  <Courselist details={course} key={index} deleteCourse={this.deleteCourse} index={index} editCourse={this.editCourse}/>
      
    });
    return (
      <section className="App">
        <h2>Add Course</h2>
        {this.state.error?<Error error={this.state.error}/>:''}
         <CourseForm current={this.state.current}  updateCourse={this.updateCourse} addCourse={this.addCourse}/>
         <ul>
           {data}
         </ul>
      </section>
    );
  }
}
export default App;
