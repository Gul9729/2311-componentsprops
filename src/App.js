import logo from './logo.svg';
import './App.css';
import Header from "./components/Header.js";
import Body from "./components/Body.js";


function App() {
  
  return (
    <div className="NewList" 
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      padding: "0px",
      width: "1440px",
      height: "2380px",
      backgroundColor: "#F1F1F1"
    }}>
    <Header />
    <Body /> 

    {/* {NewArticles.map(item=><Artickles link={item.link}/>)} */}

    {/* {users.map((user, index)=><Person key={index} name={user.name} link={user.link} image={user.image}/>)} */}
    </div>
     
  );
}

export default App;
