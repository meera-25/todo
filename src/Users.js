import React,{ useEffect, useState } from "react";
import axios from "axios";

export default function Users() {
    const [users , setUsers] =useState([]);
    useEffect(()=>{
        axios
            .get("http://reqres.in/api/users")
            .then(function (response) {
                console.log(response.data.data);
                setUsers(response.data.data)
        })
            .catch(function (error) {
                 console.log(error);
         })
     }, []);
    return <div>Hello World</div>
}