import React from "react";
import "./Report.css";
const Report2019 = () => {
  return (
    <div className="report-container">
        <object class="pdf-view" data="./files/DesignReport2019.pdf" type="application/pdf">
            <p><a href="./files/DesignReport2019.pdf"></a></p>
        </object>
    </div>
  );
};

export default Report2019;
