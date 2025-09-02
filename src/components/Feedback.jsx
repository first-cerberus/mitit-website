import React from "react";

export default function Feedback() {
  const [formData, setFormData] = UseState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
        })
    } catch (error) {
        
    }
  }
  return <></>;
}
