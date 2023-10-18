import React from 'react'
import Dashbord from './Dashbord';

import Right from './Right';

const App = () => {
  return (
    <div class="container-fluid">
    <div class="row">
    <div class="col-lg-2 col-md-2 col-4" style={{backgroundColor:'rgb(3, 3, 3)'}}><Dashbord></Dashbord></div>
    <div class="col-lg-10 col-md-10 col-8"><Right></Right></div>
    
   
    </div>
</div>
    
  )
}

export default App;

