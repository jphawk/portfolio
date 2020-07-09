import React from 'react';

function Divider(props) {
    return (
        <div className="divider">
          <div className="flex one">
            <div className="circle one small" style={{ backgroundColor: props.bgcolor }}></div>
            <div className="circle two medium" style={{ backgroundColor: props.bgcolor }}></div>
            <div className="circle three big" style={{ backgroundColor: props.bgcolor }}></div>
            <div className="circle four small" style={{ backgroundColor: props.bgcolor }}></div>
            <div className="circle five big" style={{ backgroundColor: props.bgcolor }}></div>
            <div className="circle six medium" style={{ backgroundColor: props.bgcolor }}></div>
          </div>
          <div className="flex two">
            <div className="circle one small" style={{ backgroundColor: props.bgcolor }}></div>
            <div className="circle two medium" style={{ backgroundColor: props.bgcolor }}></div>
            <div className="circle three big" style={{ backgroundColor: props.bgcolor }}></div>
            <div className="circle four small" style={{ backgroundColor: props.bgcolor }}></div>
            <div className="circle five big" style={{ backgroundColor: props.bgcolor }}></div>
            <div className="circle six medium" style={{ backgroundColor: props.bgcolor }}></div>
            <div className="circle seven small" style={{ backgroundColor: props.bgcolor }}></div>
          </div>
          <div className="flex three">
            <div className="circle two medium" style={{ backgroundColor: props.bgcolor }}></div>
            <div className="circle three big" style={{ backgroundColor: props.bgcolor }}></div>
            <div className="circle four small" style={{ backgroundColor: props.bgcolor }}></div>
            <div className="circle five big" style={{ backgroundColor: props.bgcolor }}></div>
            <div className="circle six medium" style={{ backgroundColor: props.bgcolor }}></div>
            <div className="circle seven small" style={{ backgroundColor: props.bgcolor }}></div>
          </div>
        </div>
    );
  }
  
  export default Divider;