import React, { useState } from "react";

const PostShowcaseProduct = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.image) {
      alert("Please select an image!");
      return;
    }

    try {
      const cloudinaryUrl = `https://api.cloudinary.com/v1_1/daziiakbl/image/upload`;
      const uploadPreset = "ml_default"; 

      const uploadData = new FormData();
      uploadData.append("file", formData.image);
      uploadData.append("upload_preset", uploadPreset);

      // Upload image to Cloudinary
      const res = await fetch(cloudinaryUrl, {
        method: "POST",
        body: uploadData,
      });

      const data = await res.json();
      console.log("Uploaded Image URL:", data.secure_url);

      // Here you can send the form data + image URL to your backend or Firestore
      const submittedData = {
        fullName: formData.fullName,
        email: formData.email,
        imageUrl: data.secure_url,
      };

      console.log("Submitted form data:", submittedData);
      alert("Form submitted successfully!");

      // Reset form
      setFormData({ fullName: "", email: "", image: null });
      e.target.reset();
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to submit form");
    }
  };

  return (
    <section className="w-full h-screen py-40">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="fullName">Fullname</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="image">Upload Image</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="border px-4 py-2 mt-2">
          Submit
        </button>
      </form>
    </section>
  );
};

export default PostShowcaseProduct;
