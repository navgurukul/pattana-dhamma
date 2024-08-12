import React from "react";

const DemoName = () => {
  return (
    <div>
      <div style={{backgroundColor:"red"}} class="container-sm">100% wide until small breakpoint</div>
      <div  style={{backgroundColor:"yellow"}}class="container-md">100% wide until medium breakpoint</div>
      <div style={{backgroundColor:"pink",width:"100%"}}class="container-lg">
        
        100% wide until large breakpoint
        
        </div>
    
    </div>
  );
};

export default DemoName;
