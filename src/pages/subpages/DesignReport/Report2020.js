import React from "react";
import "./Report.css";
const Report2020 = () => {
  return (
    <div className="report-container">
        <object class="pdf-view" data="./files/DesignReport2020.pdf" type="application/pdf">
            <p><a href="./files/DesignReport2020.pdf"></a></p>
        </object>
    </div>
  );
};
export default Report2020;
