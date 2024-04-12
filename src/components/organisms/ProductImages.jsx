import { useState } from "react";
import Button from "../atom/Button";

function ProductImage({ imageUrl, altText, thumbnails }) {
  const [selectedImage, setSelectedImage] = useState(imageUrl);
  return (
    <div className="flex items-end justify-start gap-4">
      <div className="w-[80%]">
        <img src={selectedImage} alt={altText} className="w-full" />
      </div>
      <ul className="flex flex-col justify-between gap-1">
        {thumbnails?.map((thumb, index) => (
          <li key={index} className="border">
            <Button onClick={() => setSelectedImage(thumb.url)} className="p-1">
              <img src={thumb.url} alt={thumb.alt} className="w-16" />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductImage;
