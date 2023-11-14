import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function OrdersList() {
  const [orders, setOrders] = useState([]);




  useEffect(() => {
    const getOrders = async () => {
      try {
        await axios.get("http://localhost:5000/api/orders/", {
          key: '_id'
        },).then(response => {
          setOrders(response.data);
        
      })
      } catch {}
    };
    getOrders();
  }, []);


  function timeCellRenderer(params) {
    const date = params.value.slice(0,10);
    const time = params.value.slice(12,16);
    const statusText = date + ' ' + time;
  
    return <div>{statusText}</div>;
  }


  function orderValueRenderer(params) {
    const amount = params.value;
  
    return <div>{amount} CAD</div>;
  }

  function postalRenderer(params) {
    const address = params.value;
    const postal = address.city + " " + address.state + ", " + (address.postal_code.slice(0,3) + " " + address.postal_code.slice(3,6) ).toUpperCase();
    return <div>{postal}</div>;
  }

  


  
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/orders/${id}`);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };


  const columns = [
    { field: "orderNo", headerName: "Order#", width: 100 },
    {
      field: "username",
      headerName: "User",
      width: 120,
     
    },
    {
      field: "amount",
      headerName: "Order Value",
      width: 120,
      renderCell: orderValueRenderer
     
    },



    { field: "address", headerName: "Postal Code and City", width: 170,
       renderCell: postalRenderer },
 

       {
        field: "createdAt",
        headerName: "Order Date & Time",
        width: 160,
        renderCell: timeCellRenderer
    
      },

    {
        field: "paymentStatus",
        headerName: "Payment Status",
        width: 160,
       
      },



    {
      field: "status",
      headerName: "Order Status",
      width: 150,
    
    },
   
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/CurrentOrder/"  + params.row.username  + "/" + params.row.orderNo}>
              <button className="productListEdit">Respond</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
 
      <DataGrid
        rows={orders}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
}
