import React from "react";
import CloudUploadIcon from "../../assets/icons/CloudUploadIcon";

export default function Upload() {
  return (
    <div className="upload">
      <div className="upload__wrapper">
        <span className="upload__icon-container">
          <CloudUploadIcon />
        </span>
        <div className="upload__text-wrapper">
          <p className="upload__description">
            <input type="file" name="upload" id="upload" />
            <label htmlFor="upload">Click to upload </label>
            or drag and drop
          </p>
          <p className="upload__extension">
            SVG, PNG, JPEG, TIFF or GIF
          </p>
        </div>
      </div>
    </div>
  );
}
