import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function useDownloadResume() {
  const exportToPDF = () => {
    const input = document.getElementById("resume-preview");

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("resume.pdf");
    });
  };
  return { exportToPDF };
}
