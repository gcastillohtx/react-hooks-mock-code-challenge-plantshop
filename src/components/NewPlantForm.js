import React, { useState } from "react";
//// set state, use onchange,

function NewPlantForm({addNewPlant}) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    image: "",
    price: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  }

  function handleSubmit(e) {
    e.preventDefault()
    addNewPlant(formData)
    
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={formData.name}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Plant name"
        />
        <input
          value={formData.image}
          onChange={handleChange}
          type="text"
          name="image"
          placeholder="Image URL"
        />
        <input
          value={formData.price}
          onChange={handleChange}
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
