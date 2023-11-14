import { useState, useRef } from "react";

export default function ImageUploadModal({ isOpen, onClose, onImageSelect }) {
  const [dragging, setDragging] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const fileInputRef = useRef(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    const files = Array.from(e.dataTransfer.files);
    setSelectedImages((prevSelectedImages) => [...prevSelectedImages, ...files]);
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    setSelectedImages((prevSelectedImages) => [...prevSelectedImages, ...files]);
  };

  const handleBrowseButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleRemoveButtonClick = (index) => {
    setSelectedImages((prevSelectedImages) => {
      const newSelectedImages = [...prevSelectedImages];
      newSelectedImages.splice(index, 1);
      return newSelectedImages;
    });
  };

  const handleUploadButtonClick = () => {
    if (selectedImages.length > 0) {
      onImageSelect(selectedImages);
      setSelectedImages([]);
      onClose();
    }
  };

  return (
    <div
      className={`fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
    >
      <div style={{ width: "700px" }} className="bg-white rounded-lg shadow-lg">
        <div className="p-6">
          <div className="text-lg font-bold mb-4">Upload Images</div>
          <div
            className={`border-dashed border-2 border-gray-400 rounded-lg p-8 cursor-pointer ${
              dragging ? "bg-gray-200" : ""
            }`}
            onDragEnter={handleDragEnter}
            onDragOver={(e) => e.preventDefault()}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="text-gray-600 mb-4 text-lg">Drag and drop your images here</div>
            <div className="text-base">(or)</div>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileSelect}
              ref={fileInputRef}
              multiple
            />
            <button className="bg-gray-900 text-white py-3 px-6 rounded mt-4" onClick={handleBrowseButtonClick}>
              Browse from PC
            </button>
            {selectedImages.length > 0 && (
              <div className="mt-4">
                {selectedImages.map((image, index) => (
                  <div className="flex items-center justify-between py-2" key={index}>
                    <div className="text-sm text-gray-600">{image.name}</div>
                    <button className="text-red-500 ml-4" onClick={() => handleRemoveButtonClick(index)}>
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="bg-gray-100 p-6 flex justify-end">
        <button className="bg-gray-900 text-white py-3 px-6 rounded mr-4" onClick={onClose}>
            Cancel
          </button>
          <button className="bg-green-500 text-white py-3 px-6 rounded" onClick={handleUploadButtonClick}>
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}
