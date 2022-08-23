import { useState } from 'react';
import { readFile } from '../../helpers/images';

export default function Photo() {
  const [imageSrc, setImageSrc] = useState(null); // file data
  const [fileName, setFileName] = useState(null); // file address
  const handleFileChange = async (e: any) => {
    if (e.target.files && e.target.files.length) {
      //we got a file
      const file = e.traget.files[0];
      setFileName(file.path);
      //get the image data from the file
      const imageData: any = await readFile(file)
      //set imageSrc to that data
      setImageSrc(imageData)
    }
  };
  if (!imageSrc) {
    return (
      <>
        <h1>Please choose photo to crop</h1>
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </>
    );
  }
  return (
    <>
      <img src={imageSrc} />
    </>
  )
}
