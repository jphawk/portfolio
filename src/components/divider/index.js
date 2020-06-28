import React from 'react';

function Divider(props) {
    return (
        <div className="divider">
          <div class="flex one">
            <div class="circle one small" style={{ backgroundColor: props.bgcolor }}></div>
            <div class="circle two medium" style={{ backgroundColor: props.bgcolor }}></div>
            <div class="circle three big" style={{ backgroundColor: props.bgcolor }}></div>
            <div class="circle four small" style={{ backgroundColor: props.bgcolor }}></div>
            <div class="circle five big" style={{ backgroundColor: props.bgcolor }}></div>
            <div class="circle six medium" style={{ backgroundColor: props.bgcolor }}></div>
          </div>
          <div class="flex two">
            <div class="circle one small" style={{ backgroundColor: props.bgcolor }}></div>
            <div class="circle two medium" style={{ backgroundColor: props.bgcolor }}></div>
            <div class="circle three big" style={{ backgroundColor: props.bgcolor }}></div>
            <div class="circle four small" style={{ backgroundColor: props.bgcolor }}></div>
            <div class="circle five big" style={{ backgroundColor: props.bgcolor }}></div>
            <div class="circle six medium" style={{ backgroundColor: props.bgcolor }}></div>
            <div class="circle seven small" style={{ backgroundColor: props.bgcolor }}></div>
          </div>
          <div class="flex three">
            <div class="circle two medium" style={{ backgroundColor: props.bgcolor }}></div>
            <div class="circle three big" style={{ backgroundColor: props.bgcolor }}></div>
            <div class="circle four small" style={{ backgroundColor: props.bgcolor }}></div>
            <div class="circle five big" style={{ backgroundColor: props.bgcolor }}></div>
            <div class="circle six medium" style={{ backgroundColor: props.bgcolor }}></div>
            <div class="circle seven small" style={{ backgroundColor: props.bgcolor }}></div>
          </div>
        </div>
    );
  }
  
  export default Divider;