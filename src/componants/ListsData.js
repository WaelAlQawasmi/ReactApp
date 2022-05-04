import React, { useEffect, useState } from 'react';
import Api from '../Services/listData';
import Footer from './Footer';
function ListsData() {

    const [lists,setLists]=useState([]);

    const getApi = () => Api.gitList().then((Response)=>{
        setLists(Response.data);
        console.log(lists);
    });

    

    useEffect(() => {
        getApi()
    }, [])
//     const [users,setUsers]  =useState(lists.owner);
//    const deleteItem=(id)=>{
//        setUsers(  lists.owner.filter(user=> user.id!==id));
//      }
  
        return (
        <div className = "container">
        
            <h1 className = "text-center">  Lists</h1>

            <table className = "table table-striped">
                <thead>
                    <tr>
                        <th> lists Id</th>
                        <th> name</th>
                        <th> owner</th>
                     
                    </tr>

                </thead>
                <tbody>
                    {
                        lists.map(
                                lists =>
                      

                                <tr key = {lists.id}>
                                      {/* { console.log(lists.owner)} */}
                                    <td> {lists.name }</td>
                                    <td> ko</td>
                                                                  </tr>

                        )
                    }

                </tbody>


            </table>




            <h1 className = "text-center">  Lists</h1>

            <table className = "table table-striped">
                <thead>
                    <tr>
                        <th> owner Id</th>
                        <th> username</th>
                        <th> firstName</th>
                     
                    </tr>

                </thead>
                <tbody>
            {            
                        lists.map(
                                lists =>
                      

                               
                                <Footer  owner={lists.owner} />    

                        )
                    }

</tbody>



</table>

        </div>
    )
}
export default ListsData;