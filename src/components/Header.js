import Logo from "../images/Logo.png";
import helloImage from "../images/Logo (1).png";

function Header() {
 
    return (
      <>
      <div className="Header" 
       style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "24px 160px",
        gap: "752px",
        width: "1440px",
        height: "70px"
       }}>
        <img src={Logo}
        alt="logo" 
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          gap: "10px",
          width: "1120px",
          height: "22px"
        }} />            
        </div>
        
        <div className="Header1" 
        style={{
         display: "flex",
         flexDirection: "row",
         alignItems: "center",
         padding: "64px 160px",
         gap: "752px",
         width: "1440px",
         height: "248px"
        }}>
         <img src={helloImage}
         alt="helloimg" 
         style={{
           flexDirection: "row",
           alignItems: "flex-start",
           gap: "10px",
           width: "1120px",
           height: "120px"
         }} />            
         </div> 
      </>
    )
        }
       
   export default Header;


  
  


   