
function SectionOne(props) {

 const mainContainerStyle ={
     display:"flex",
     flex: "auto 1 1",
     width :"100%",
     justifyContent:"space-evenly"
 }

  return (
    <div className="sectionOne" style={mainContainerStyle}>
        <div className="leftContainer">
            <h1> Left carousel</h1>
        </div>
        <div className="lcenterContainer">
             <h1> Center carousel</h1>
        </div>
        <div className="lrightContainer">
            <h1> Right carousel</h1>
        </div>
    

    </div>
  );
}

export default SectionOne;
