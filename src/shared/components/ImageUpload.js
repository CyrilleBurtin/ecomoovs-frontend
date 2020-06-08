import React, { useRef, useState, useEffect } from "react";
import BlueButton from '../uiElements/BlueButton';

const ImageUpload = props => {
  
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState();

  const filePickerRef = useRef();

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file); 
  }, [file]);

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  const pikedHandler = event => {
    let pickedFile;
    let fileIsValid = isValid;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = true;
    }
    props.onInput(props.id, pickedFile, fileIsValid);
  };

  return (
    <div>
      <input
        id={props.id}
        ref={filePickerRef}
        style={{ display: "none" }}
        type="file"
        accept=".jpeg,.png,.jpg"
        onChange={pikedHandler}
      />
      <div>
        <div>
          {previewUrl && <img src={previewUrl} alt="Preview" width="100%" />}
          {!previewUrl && <p>Choisissez une photo</p>}
          </div>
        <BlueButton type="button" onClick={pickImageHandler}>
          PICK IMAGE
        </BlueButton>
        {!isValid && <p>{props.errorText}</p>}
      </div>
    </div>
  );
};

export default ImageUpload;
