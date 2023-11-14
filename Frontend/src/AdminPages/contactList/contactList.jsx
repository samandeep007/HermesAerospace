import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ContactList() {
  const [contacts, setContacts] = useState([]);
  



  useEffect(() => {
    const getContacts = async () => {
      try {
        await axios.get("http://localhost:5000/api/contacts/", {
          key: '_id'
        },).then(response => {
          setContacts(response.data);
      })
      } catch {}
    };
    getContacts();
  }, []);


  function timeCellRenderer(params) {
    const date = params.value.slice(0,10);
    const time = params.value.slice(12,16);
    const statusText = date + ' ' + time;
  
    return <div>{statusText}</div>;
  }

  
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/contacts/${id}`);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };


  const columns = [
    { field: "name", headerName: "Name", width: 150 },
    {
      field: "email",
      headerName: "Email",
      width: 200,
     
    },
   
    {
      field: "mobile",
      headerName: "Mobile",
      width: 120,
  
    },

    {
        field: "createdAt",
        headerName: "Date and Time",
        width: 160,
        renderCell: timeCellRenderer
    
      },

    {
      field: "subject",
      headerName: "Subject",
      width: 260,
     
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/CurrentMessage/" + params.row._id}>
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
        rows={contacts}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
}
