import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import data from "../data";

function AddNewStudent() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    class: "",
    age: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Họ và tên không được để trống";
    }
    if (!formData.class.trim()) {
      newErrors.class = "Lớp không được để trống";
    }
    if (!formData.age.trim()) {
      newErrors.age = "Tuổi không được để trống";
    } else if (isNaN(formData.age) || formData.age <= 0) {
      newErrors.age = "Tuổi phải là số dương";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = () => {
    if (validateForm()) {
      data.push({
        id: data.length + 1,
        hoTen: formData.name,
        lop: formData.class,
        tuoi: parseInt(formData.age),
      });
      navigate("/");
    }
  };

  return (
    <div className="container mx-auto">
      <Link
        to={"/"}
        className="text-lg text-blue-400 hover:underline"
      >
        Quay về
      </Link>
      <div className="space-y-4 max-w-md mx-auto p-6 bg-white rounded-lg border mt-4">
        <h2 className="text-xl font-bold">Add New Student</h2>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Họ và tên
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 border px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label
            htmlFor="class"
            className="block text-sm font-medium text-gray-700"
          >
            Lớp
          </label>
          <input
            type="text"
            name="class"
            id="class"
            value={formData.class}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 border px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.class && <p className="text-red-500 text-sm">{errors.class}</p>}
        </div>
        <div>
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-700"
          >
            Tuổi
          </label>
          <input
            type="text"
            name="age"
            id="age"
            value={formData.age}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 border px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
        </div>
        <div>
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-blue-400 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Add Student
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddNewStudent;