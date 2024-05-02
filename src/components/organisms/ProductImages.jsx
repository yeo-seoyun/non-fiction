import { useState } from "react";
import Button from "../atom/Button";

function ProductImage({ imageUrl, altText, thumbnails }) {
  const [selectedImage, setSelectedImage] = useState(imageUrl);
  return (
    <div className="flex lg:flex-row lg:items-end justify-start gap-4 md:flex-col md:items-start sm:flex-col sm:items-start">
      <div className="w-[80%]">
        <img src={selectedImage} alt={altText} className="w-full" />
      </div>
      <ul className="flex lg:flex-col justify-between gap-1 md:flex-row sm:flex-row">
        {thumbnails?.map((thumb, index) => (
          <li key={index} className="border">
            <Button onClick={() => setSelectedImage(thumb.url)} className="p-1">
              <img
                src={thumb.url}
                alt={thumb.alt}
                className="lg:w-16 md:w-12 sm:w-10"
              />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductImage;
