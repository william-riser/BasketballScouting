import React from 'react';
import { useState } from 'react';
import axios from 'axios';


const AddPlayer = () =>{
    const [formData, setFormData] = useState({
        school_id: '',
        name: '',
        age: '',
        height: '',
        weight: '',
        position: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('http://localhost:3001/addPlayer', formData);
          console.log(response.data);
          // Handle success, e.g., show a success message to the user
        } catch (error) {
          console.error('Error adding player:', error.message);
          // Handle error, e.g., show an error message to the user
        }
      };
    
      return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 text-sm font-semibold text-gray-600">
          School ID:
          <input
            type="text"
            name="school_id"
            value={formData.school_id}
            onChange={handleChange}
            className="form-input mt-1 block w-full"
          />
        </label>
        <label className="block mb-2 text-sm font-semibold text-gray-600">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input mt-1 block w-full"
          />
        </label>
        <label className="block mb-2 text-sm font-semibold text-gray-600">
          Age:
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="form-input mt-1 block w-full"
          />
        </label>
        <label className="block mb-2 text-sm font-semibold text-gray-600">
          Height (in inches):
          <input
            type="text"
            name="height"
            value={formData.height}
            onChange={handleChange}
            className="form-input mt-1 block w-full"
          />
        </label>
        <label className="block mb-2 text-sm font-semibold text-gray-600">
          Weight:
          <input
            type="text"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            className="form-input mt-1 block w-full"
          />
        </label>
        <label className="block mb-2 text-sm font-semibold text-gray-600">
          Position:
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="form-input mt-1 block w-full"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Add Player
        </button>
      </form>
    </div>
  );
    };
    

export default AddPlayer;
