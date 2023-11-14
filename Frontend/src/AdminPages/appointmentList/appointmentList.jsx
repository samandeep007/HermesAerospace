import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function AppointmentList() {
  const [appointments, setAppointments] = useState([]);
  const[lastName, setLastName]=useState('');



  useEffect(() => {
    const getAppointments = async () => {
      try {
        await axios.get("http://localhost:5000/api/appointments/", {
          key: '_id'
        },).then(response => {
          setAppointments(response.data);
          setLastName(response.data.lastName);
      })
      } catch {}
    };
    getAppointments();
  }, []);

  function customerCellRenderer(params) {
    const isExistingCustomer = params.value;
    const statusText = isExistingCustomer ? 'Yes' : 'No';
  
    return <div>{statusText}</div>;
  }

  function timeCellRenderer(params) {
    const date = params.value.slice(0,10);
    const time = params.value.slice(12,16);
    const statusText = date + ' ' + time;
  
    return <div>{statusText}</div>;
  }

  
  const handleDelete = async (token) => {
    try {
      await axios.delete(`http://localhost:5000/api/appointments/${token}`);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };


  const columns = [
    { field: "token", headerName: "Token#", width: 100 },
    {
      field: "firstName",
      headerName: "Name",
      width: 150,
     
    },
    { field: "email", headerName: "Email", width: 250 },
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
      field: "isExistingCustomer",
      headerName: "Existing Customer?",
      width: 150,
      renderCell: customerCellRenderer
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
    
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/CurrentAppointment/" + params.row.token}>
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
        rows={appointments}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
}
