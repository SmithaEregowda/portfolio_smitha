export const downloadcv=()=>{
  const pdfUrl = "images/smithaHEResume.pdf";
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "document.pdf"; // specify the filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}