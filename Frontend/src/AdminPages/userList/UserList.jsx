import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios'

export default function UserList() {
  const [userRows, setUserRows] = useState([]);



  useEffect(() => {
    const getUsers = async () => {
      try {
        await axios.get("http://localhost:5000/api/users/?new=true", {
          key: '_id'
        },).then(response => {
          setUserRows(response.data);
      })
      } catch {}
    };
    getUsers();
  }, []);


  const [data, setData] = useState(userRows);


  const handleDelete = async (_id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${_id}`);
      setUserRows((prevRows) => prevRows.filter((row) => row._id !== _id));
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  
  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    { field: "name", headerName: "Full Name", width: 200 },
    {
      field: "user",
      headerName: "User",
      width: 150,
      renderCell: (params) => {
        return (
          <>
          <div className="userListUser">
          
            {params.row.username}
          </div>
         
        </>
        );

      },
    },
  
    { field: "email", headerName: "Email", width: 250 },
    // {
    //   field: "status",
    //   headerName: "Status",
    //   width: 120,
    // },
    // {
    //   field: "transaction",
    //   headerName: "Transaction Volume",
    //   width: 160,
    // },
    {
      field: "isAdmin",
      headerName: "Role",
      width: 200,
      renderCell: (params) => {
        return (
          <>
         
          
           { params.value ? "Admin" : "Customer" }
       
         
        </>
        );

      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      {/* <div className="userTitleContainer">
        <h1 className="userTitle">Users</h1>
        <Link to="/newuser">
          <button className="productAddButton">Create</button>
        </Link>
      </div> */}

      <DataGrid
        rows={userRows}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
}
