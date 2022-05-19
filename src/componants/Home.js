
import React, {useState , useEffect} from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import ListsData from "./ListsData";
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function Home(){


    const [users,setUsers]  =useState([{"color": "purple", 
    "type": "minivan",
    "registration": new Date('2012-02-03'),
    "id": 7},{"color": "red",
    "type": "i phone",
    "registration": new Date('2020-02-20'),
    "id": 8}]);
useEffect(()=>{
//console.log(users)
})

    const deleteItem=(id)=>{
      setUsers(  users.filter(user=> user.id!==id));
    }
    return(
<div>
        <Header username="wael"/>

        <Body thename="appName"/>
        {/* <Footer  users={users} deleteItem={deleteItem}/> */}
       
        <Routes>
          <Route path="list" element={ <ListsData />} />
        </Routes>

    
        </div>
    );
}
export default Home;
