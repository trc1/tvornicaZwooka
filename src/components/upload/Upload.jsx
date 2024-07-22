import React, { useState } from "react";
import CloudUploadIcon from "../../assets/icons/CloudUploadIcon";
import UploadFile from "../upload-file/UploadFile";
export default function Upload() {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);

    setFiles((prev) => [...prev, ...files]);
  };

  const handleDelete = (fileName) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  return (
    <div className="upload">
      <div className="upload__wrapper">
        <span className="upload__icon-container">
          <CloudUploadIcon />
        </span>
        <div className="upload__text-wrapper">
          <p className="upload__description">
            <input
              type="file"
              name="upload"
              id="upload"
              multiple
              onChange={handleFileChange}
            />
            <label htmlFor="upload">Click to upload </label>
            or drag and drop
          </p>
          <p className="upload__extension">SVG, PNG, JPEG, TIFF or GIF</p>
        </div>
      </div>
      {files.length > 0 && (
        <ul className="upload__file-list">
          {files.map((file, index) => (
            <UploadFile
              type={file.type}
              name={file.name}
              size={file.size}
              handleDelete={() => handleDelete(file.name)}
              key={index}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
