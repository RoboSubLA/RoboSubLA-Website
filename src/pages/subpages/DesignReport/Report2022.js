import React from "react";
import "./Report.css";
const Report2022 = () => {
  return (
    <div className="report-container">
        <object class="pdf-view" data="./files/2022TDR.pdf" type="application/pdf">
            <p><a href="./files/2022TDR.pdf"></a></p>
        </object>
    </div>
  );
};

export default Report2022;
