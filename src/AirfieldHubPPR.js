import React from "react";
// import "./AirfieldHubPPR.css";
import IframeResizer from 'iframe-resizer-react'

export const AirfieldHubPPR = ({ airfieldhub_key=" " }) => (
  <div className="airfieldhub_wrapper">
    <IframeResizer
      frameBorder="0"
      src={"https://airfieldhub.com/widget.html/arrival/" + airfieldhub_key }
      style={{ width: '1px', minWidth: '100%'}}
    />
  </div>
);

