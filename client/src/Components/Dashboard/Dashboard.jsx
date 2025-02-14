import { Button, Input } from "@nextui-org/react";
import { useState } from "react";

const initialState = {
  id: "",
  coverImage: null, // ✅ Store file as null initially
  name: "",
  category: "",
  for: "",
  save: "",
  mainPrice: "",
  discountPrice: "",
  showcases: "",
  images: "",
  sizes: "",
};

const fields = [
  { name: "id", type: "number", placeholder: "Product ID" },
  { name: "coverImage", type: "file", placeholder: "Cover Image" },
  { name: "name", type: "text", placeholder: "Product Name" },
  { name: "category", type: "text", placeholder: "Category (comma separated)" },
  { name: "for", type: "text", placeholder: "For (men/women)" },
  { name: "save", type: "number", placeholder: "Save Amount" },
  { name: "mainPrice", type: "number", placeholder: "Main Price" },
  { name: "discountPrice", type: "number", placeholder: "Discount Price" },
  { name: "showcases", type: "text", placeholder: "Showcases (comma separated)" },
  { name: "images", type: "text", placeholder: "Images URLs (comma separated)" },
  { name: "sizes", type: "text", placeholder: "Sizes (comma separated)" },
];

const ProductForm = () => {
  const [product, setProduct] = useState(initialState);
  const [previewImage, setPreviewImage] = useState(null); // ✅ Store image preview separately

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;

    if (type === "file" && files.length > 0) {
      const file = files[0];
      setProduct((prev) => ({
        ...prev,
        [name]: file, // ✅ Store actual file in state
      }));
      setPreviewImage(URL.createObjectURL(file)); // ✅ Generate preview
    } else {
      setProduct((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Data: ", product);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-lg mx-auto bg-white shadow-lg rounded-lg space-y-3 py-20">
      {fields.map((field) => (
        <div key={field.name} className="w-full">
          {field.type === "file" ? (
            <>
              <Input
                type="file"
                name={field.name}
                onChange={handleChange} // ✅ Handles file upload separately
                className="w-full p-2 border rounded"
              />
              {/* Show Image Preview if File is Uploaded */}
              {previewImage && (
                <div className="mt-2">
                  <img
                    src={previewImage}
                    alt="Uploaded Preview"
                    className="w-40 h-40 object-cover rounded"
                  />
                </div>
              )}
            </>
          ) : (
            <Input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={product[field.name]}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          )}
        </div>
      ))}

      <Button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
        Submit
      </Button>
    </form>
  );
};

export default ProductForm;
