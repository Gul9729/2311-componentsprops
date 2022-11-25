import InfoTop from "../images/InfoTop.png";
import InfoBottom from "../images/InfoBottom.png";
import Img from "../images/Img.png";

function Artickles(props) {
    console.log(props);
    return (
      <div>
        <a href={props.link}>Article</a>
      
      </div>
    )
  }



function Body() {
    
    const NewArticles = [
        {
          link: 'https://www.nytimes.com/live/2022/11/25/business/black-friday-2022'
        }
      ]
    
    return (
    <>
    <div className="NewsList"
    style={{
        //display: "block",
        flexDdirection: "column",
        alignItems: "flex-start",
        padding: "0px 160px",
        gap: "45px",
        width: "1440px",
        height: "1152px",
    }}>
        <div className="News1"
        style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            padding: "0px 0px 36px",
            gap: "100px",
            width: "1120px",
            height: "310px",

            //background: "#F1F1F1",
            borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
            flex: "none",
            order: "0",
            flexGrow: "0"
        }}>
            
            <div className="Left"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "0px",
                gap: "70px",
                width: "265px",
                height: "265px"
            }}> 
                <div className="Top"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    padding: "0px",
                    gap: "48px",
                    width: "693px",
                    height: "174px"
                }}>
         <img src={InfoTop}
        alt="logo" 
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: "0px",
          gap: "4px",
          width: "285px",
          height: "24px"
        }} />
        <div className="Title" style={{
            width: "693px",
            height: "34px",
            fontFamily: "Inter",
            fontstyle: "normal",
            fontweight: "900",
            fontsize: "50px",
            lineheight: "34px",
            display: "flex",
            alignItems: "center"
        }}>
            <b>
            7 Practical CSS Tips
            </b> 
            </div>
            {/* Array */}
            <div>{NewArticles.map(item=><Artickles link={item.link}/>)}</div>
       
        </div>
        <div className="InfoBottom"
        style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            padding: "0px",
            gap: "325px",
            width: "755px",
            height: "30px"
        }}>
            <img src={InfoBottom} alt="logo"/>    
        </div>
        </div> 
        <img src={Img} alt="logo" 
            style={{    
            width: "265px",
            height: "265px",
            background: "url(image.png)",
            borderRadius: "4px",
            flex: "none",
            order: "1",
            flexGrow: "0"
            }} />           
    </div>
    <div className="News1"
        style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            padding: "0px 0px 36px",
            gap: "100px",
            width: "1120px",
            height: "376px",

            //background: "#F1F1F1",
            borderBottom: "1px solid rgba(0, 0, 0, 0.2)"
        }}>
            <div className="Left"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "0px",
                gap: "70px",
                width: "755px",
                height: "340px"
            }}>
                <div className="Top"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    padding: "0px",
                    gap: "48px",
                    width: "693px",
                    height: "240px"
                }}>
         <img src={InfoTop}
        alt="logo" 
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: "0px",
          gap: "4px",
          width: "285px",
          height: "24px"
        }} />
        <div className="Title" style={{
            width: "693px",
            height: "34px",
            fontFamily: "Inter",
            fontstyle: "normal",
            fontweight: "700",
            fontsize: "28px",
            lineheight: "34px",
            display: "flex",
            alignItems: "center",
            color: "#000000"
        }}>
            <b>
            7 Practical CSS Tips
            </b>
            {/* Array */}
        </div>
        </div>
        <div className="InfoBottom"
        style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            padding: "0px",
            gap: "325px",
            width: "755px",
            height: "30px"
        }}>
            <img src={InfoBottom} alt="logo"/>    
        </div>
        </div>            
    </div>
</div>
    
    </>
    )
    
}

export default Body;