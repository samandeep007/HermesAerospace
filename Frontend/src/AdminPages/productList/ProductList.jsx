import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);



  useEffect(() => {
    const getProducts = async () => {
      try {
        await axios.get("http://localhost:5000/api/products/", {
          key: '_id'
        },).then(response => {
          setProducts(response.data);
      })
      } catch {}
    };
    getProducts();
  }, []);

  function availabilityCellRenderer(params) {
    const isAvailable = params.value;
    const statusText = isAvailable ? 'Available' : 'Out of Stock';
  
    return <div>{statusText}</div>;
  }
  
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };


  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.images[0]} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "availability",
      headerName: "Status",
      width: 120,
      renderCell: availabilityCellRenderer
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/CurrentProduct/" + params.row._id}>
              <button className="productListEdit">Edit</button>
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
        rows={products}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
}
