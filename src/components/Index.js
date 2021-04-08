import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from './Table'
import Address from './Address'

const apiKey = '8E7H76GPP47UYYS28BQFWT26ZUB5YAS3N2';
const endpoint = `https://api.etherscan.io/api`;


export default function Index() {
    const[transData, setTransData] = useState([])
    const[address, setAddress] = useState('')
        

    useEffect(() => {
        if(address !== '') {
            getTrans();
        }
        else {
            setTransData([])
        }
    }, [address])
const getTrans = () => {
    axios.get(endpoint + `?module=account&action=txlist&address=${address}&sort=asc&page=1&offset=10000&apikey=${apiKey}` )
    .then((response) => {
        setTransData(response.data.result);
    })
    .catch(error => console.error(error));
}

    const updateAddress = (value) => {
        setAddress(value)
    }

const columns= [
    {
        Header: "Time stamp",
        accessor: "timeStamp"
      },
      {
        Header: "From address",
        accessor: "from"
      },
      {
        Header: "To address",
        accessor: "to"
      },
      {
        Header: "Value",
        accessor: "value"
      },
      {
        Header: "Confirmations",
        accessor: "confirmations"
      },
      {
        Header: "Hash",
        accessor: "hash"
      }
    ]

return(
<div>
    <Address setAddress={updateAddress}/>
    <Table columns={columns}
     data={transData}
     />
</div>
);
}