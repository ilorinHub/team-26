import React from 'react'
import Nav from './Nav'

import TeacherList from './TeacherList';

function Teacher({teacherList}) {


  return (
    <div className='teacher'>
        <Nav/>
        <TeacherList teacherList={teacherList}/>
    </div>
  )
}

export default Teacher