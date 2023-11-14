// import logo from './logo.svg';
import "./App.css";
import Services from "./components/Services";
import Login from "./components/Login";
import Main from "./components/Main";
import About from "./components/about";
import Media from "./components/Media";
import Contact from "./components/contact";
import Appointment from "./components/Appointment";
import Quote from "./components/quote";
import Photography from "./components/photography";
import Data from "./components/Data";
import Store from "./components/Store";
import Cart from "./components/Cart";
import Greeting from "./components/Greeting";
import Pay from "./components/pay";
import StoreRegister from "./components/StoreRegister";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import StoreLogin from "./components/StoreLogin";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import { useSelector } from "react-redux";
import Sidebar from "./AdminComponents/sidebar/Sidebar";
import Topbar from "./AdminComponents/topbar/Topbar";
import Home from "./AdminPages/home/Home";
import UserList from "./AdminPages/userList/UserList";
import User from "./AdminPages/user/User";
import NewUser from "./AdminPages/newUser/NewUser";
import AdminProductList from "./AdminPages/productList/ProductList";
import AdminProduct from "./AdminPages/product/Product";
import NewPro from "./AdminRedux/Newpro";
import PrivacyPolicy from "./components/PrivacyPolicy";
import FAQ from "./components/FAQ";
import TermsAndConditions from "./components/TermsAndConditions";
import Error404 from "./ErrorPages/Error404";
import Error500 from "./ErrorPages/Error500";
import Error403 from "./ErrorPages/Error403";
import AppointmentList from "./AdminPages/appointmentList/appointmentList";
import AppointmentPage from "./AdminPages/Appointment/AppointmentPage";
import AppointmentSearch from "./components/AppointmentSearch";
import ContactList from "./AdminPages/contactList/contactList";
import Contact2 from "./AdminPages/Contact/Contact";
import DataList from "./AdminPages/dataList/dataList";
import DataQuote from "./AdminPages/Data/data";
import Newsletter from "./AdminPages/Newsletter/Newsletter";
import OrdersList from "./AdminPages/OrdersList/OrdersList";
import Order from "./AdminPages/Order/Order";
import TextCard from "./components/textCard";
import Analytics from "./AdminPages/Analytics/Analytics";
import UserSidebar from './UserPages/sidebar/UserSidebar'
import UserHome from "./UserPages/UserHome/UserHome";
import UserOrder from './UserPages/Order/UserOrder';
import ChangePassword from "./UserPages/ChangePassword/ChangePassword";
import UserDetails from "./UserPages/user/UserDetails";

function App() {
  const admin = useSelector((state) => state.user.currentUser);
 

  return (
    <>
      <Router>
        <Route exact path="/saman" component={NewPro} />
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/gallery" component={Media} />
        <Route exact path="/appointment" component={Appointment} />
        <Route exact path="/quotation" component={Quote} />
        <Route exact path="/photography" component={Photography} />
        <Route exact path="/data" component={Data} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/store" component={Store} />
        <Route exact path="/cart"> {admin ? (
            <Cart/>
          ) : (
            <StoreLogin />
          )}</Route>
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/signin">
          {admin ? (
            admin.isAdmin ? (
              <Redirect to="/dashboard" />
            ) : (
              <Redirect to="/user" />
            )
          ) : (
            <StoreLogin />
          )}
        </Route>


        {admin ? (
          admin.isAdmin && (
            <>
               <Route exact path="/dashboard">
          <body style={{ backgroundColor: "#121212" }}>
            <Topbar />

            <div className="dashboard">
              <Sidebar height="1350px" />

              <Home />
            </div>
          </body>
        </Route>
              <Route exact path="/users">
                <Topbar />
                <div className="dashboard">
                  <Sidebar height="100vh" />
                  <UserList />
                </div>
              </Route>
              <Route path="/user/:userId">
              <body style={{ backgroundColor: "#121212", height: "110vh"}}>
                <Topbar />
                <div className="dashboard">
                  <Sidebar />
                  <User />
                </div>
                </body>
              </Route>

              <Route path="/appointments">
                <Topbar />
                <div className="dashboard">
                  <Sidebar height="100vh" />
                  <AppointmentList />
                </div>
              </Route>

              <Route path="/contacts">
                <Topbar />
                <div className="dashboard">
                  <Sidebar height="100vh" />
                  <ContactList />
                </div>
              </Route>

              <Route path="/dataQuotes">
                <Topbar />
                <div className="dashboard">
                  <Sidebar height="100vh" />
                  <DataList />
                </div>
              </Route>

              <Route path="/analytics">
                <Topbar />
                <body style={{ backgroundColor: "rgb(6,6,6)" }}>
                  <div className="dashboard">
                    <Sidebar height="1000px" />

                    <Analytics />
                  </div>
                </body>
              </Route>

              <Route path="/Newsletter">
                <Topbar />
                <div className="dashboard">
                  <Sidebar height="100vh" />
                  <Newsletter />
                </div>
              </Route>

              <Route path="/newUser">
                <Topbar />
                <div className="dashboard">
                  <Sidebar height="100vh" />
                  <NewUser />
                </div>
              </Route>

              <Route path="/allProducts">
                <Topbar />
                <div className="dashboard">
                  <Sidebar height="100vh" />
                  <AdminProductList />
                </div>
              </Route>

              <Route path="/CurrentProduct/:productId">
                <Topbar />
                <div className="dashboard">
                  <Sidebar />
                  <AdminProduct />
                </div>
              </Route>

              <Route path="/CurrentAppointment/:token">
                <Topbar />
                <div className="dashboard">
                  <Sidebar />
                  <AppointmentPage />
                </div>
              </Route>

              <Route path="/CurrentMessage/:id">
                <Topbar />
                <div className="dashboard">
                  <Sidebar />
                  <Contact2 />
                </div>
              </Route>

              <Route path="/CurrentOrder/:orderNo">
                <Topbar />
                <div className="dashboard">
                  <Sidebar />
                  <Order />
                </div>
              </Route>

              <Route path="/dataQuote/:id">
                <Topbar />
                <div className="dashboard">
                  <Sidebar />
                  <DataQuote />
                </div>
              </Route>

              <Route path="/orders">
                <Topbar />
                <div className="dashboard">
                  <Sidebar height="100vh" />
                  <OrdersList />
                </div>
              </Route>

              <Route path="/edit">
              <body style={{ backgroundColor: "#121212", height: "110vh"}}>
                <Topbar />
                <div className="dashboard">
                  <Sidebar height="110vh" />
                 <UserDetails/>
                </div>
                </body>
              </Route>




            </>
          )
        ) : (
          <Redirect to="/store" />
        )}

        {admin ? (
          !admin.isAdmin && (
            <>
              <Route exact path="/user">  
              <body style={{ backgroundColor: "#121212" }}>
               <Topbar />
                <div className="dashboard">
                  <UserSidebar height="100vh" />
                 <UserHome/>
                </div>
                </body>
                </Route>


                <Route path="/order/:orderNo">
                <body style={{ backgroundColor: "#121212" }}>
                <Topbar />
                <div className="dashboard">
                  <UserSidebar />
                  <UserOrder />
                </div>
                </body>
              </Route>

              <Route path="/changePassword">
              <body style={{ backgroundColor: "#121212", height: "100vh"}}>
                <Topbar />
                <div className="dashboard">
                  <UserSidebar height="100vh" />
                  <ChangePassword />
                </div>
                </body>
              </Route>

              <Route path="/edit">
              <body style={{ backgroundColor: "#121212", height: "110vh"}}>
                <Topbar />
                <div className="dashboard">
                  <UserSidebar height="100vh" />
                 <UserDetails/>
                </div>
                </body>
              </Route>


            </>
          )
        ) : (
          <Redirect to="/store" />
        )}

        <Route exact path="/success" component={Greeting} />
        <Route exact path="/pay" component={Pay} />
        <Route exact path="/Register" component={StoreRegister} />
        <Route exact path="/Products/:Category" component={ProductList} />
        <Route exact path="/Product/:id" component={Product} />
        <Route exact path="/privacy" component={PrivacyPolicy} />
        <Route exact path="/tnc" component={TermsAndConditions} />
        <Route exact path="/404" component={Error404} />
        <Route exact path="/403" component={Error403} />
        <Route exact path="/500" component={Error500} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/test" component={TextCard} />
        <Route exact path="/findmyappointment" component={AppointmentSearch} />
      </Router>
    </>
  );
}

export default App;
