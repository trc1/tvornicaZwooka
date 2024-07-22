import { useEffect, useState } from "react";
import ProgressBar from "../progress-bar/ProgressBar";
import JPEGIcon from "../../assets/icons/JPEGIcon";
import PDFIcon from "../../assets/icons/PDFIcon";
import CSVIcon from "../../assets/icons/CSVIcon";
import DeleteIcon from "../../assets/icons/DeleteIcon";
export default function UploadFile({ type, name, size, handleDelete }) {
  const [uploadFill, setUploadFill] = useState(1);
  const [uploadError, setUploadError] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setUploadFill((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);
  return (
    <li
      className={
        !uploadError ? "upload-file" : "upload-file upload-file--error"
      }
    >
      <div className="upload-file__wrapper">
        {type.startsWith("image") && <JPEGIcon />}
        {type.startsWith("application") && <PDFIcon />}
        {type.startsWith("text") && <CSVIcon />}
        <div className="upload-file__text-wrapper">
          <p className="upload-file__file-name">{name}</p>
          <p className="upload-file__file-size">
            {(size / (1024 * 1024)).toFixed(2)} MB
          </p>
        </div>
        <div className="upload-file__delete-icon" onClick={handleDelete}>
          <DeleteIcon />
        </div>
      </div>
      {uploadFill === 100 ? (
        ""
      ) : (
        <div className="upload-file__progress-wrapper">
          <ProgressBar fill={uploadFill} />
          <p className="upload-percent">{uploadFill}%</p>
        </div>
      )}
      {uploadError && (
        <div className="upload-file__error-wrapper">
          <p className="upload-file__error-message">Try Again</p>
        </div>
      )}
    </li>
  );
}
