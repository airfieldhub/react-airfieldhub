import React from "react";
// import "./AirfieldHubBookout.css";
import IframeResizer from 'iframe-resizer-react'

export const AirfieldHubBookout = ({ airfieldhub_key=" " }) => (
  <div className="airfieldhub_wrapper">
    <IframeResizer
      frameBorder="0"
      src={"https://airfieldhub.com/widget.html/departure/" + airfieldhub_key }
      style={{ width: '1px', minWidth: '100%'}}
    />
  </div>
);

