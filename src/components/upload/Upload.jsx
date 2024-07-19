import React from "react";
import CloudUploadIcon from "../../assets/icons/CloudUploadIcon";

export default function Upload() {
  return (
    <div className="upload">
      <div className="upload__wrapper">
        <span className="upload__wrapper-icon-container">
          <CloudUploadIcon />
        </span>
        <div className="upload__wrapper-text">
          <p className="upload__wrapper-text-description">
            <input type="file" name="upload" id="upload" />
            <label htmlFor="upload">Click to upload </label>
            or drag and drop
          </p>
          <p className="upload__wrapper-text-extension">
            SVG, PNG, JPEG, TIFF or GIF
          </p>
        </div>
      </div>
    </div>
  );
}
