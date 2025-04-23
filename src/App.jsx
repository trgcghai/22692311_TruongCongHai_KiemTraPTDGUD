import { Link } from "react-router-dom";
import "./App.css";
import data from "./data";
import { useState } from "react";

function App() {
  const [students, setStudents] = useState(data);
  const [editingStudentId, setEditingStudentId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    hoTen: "",
    tuoi: "",
    lop: ""
  });

  const handleEditClick = (student) => {
    setEditingStudentId(student.id);
    setEditFormData({
      hoTen: student.hoTen,
      tuoi: student.tuoi,
      lop: student.lop
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: value
    });
  };

  const handleSaveEdit = () => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === editingStudentId
          ? { ...student, ...editFormData, tuoi: parseInt(editFormData.tuoi) }
          : student
      )
    );
    setEditingStudentId(null);
  };

  const handleCancelEdit = () => {
    setEditingStudentId(null);
  };

  const handleDeleteStudent = (id) => {
    const confirm = window.confirm("Bạn có chắc chắn muốn xóa sinh viên này không?");
    if (!confirm) return;
    setStudents(students.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-center">
            Danh sach sinh vien
          </h1>
          <Link
            to={"/add-new-student"}
            className="text-lg bg-blue-500 text-white rounded-lg px-3 py-2"
          >
            Them sinh vien
          </Link>
        </div>
        <div className="space-y-4">
          {students.map((item) => (
            <div key={item.id} className="p-4 border rounded-lg">
              {editingStudentId === item.id ? (
                <div>
                  <div className="mb-2">
                    <label>Họ tên:</label>
                    <input
                      type="text"
                      name="hoTen"
                      value={editFormData.hoTen}
                      onChange={handleEditChange}
                      className="border px-2 py-1 w-full rounded"
                    />
                  </div>
                  <div className="mb-2">
                    <label>Tuổi:</label>
                    <input
                      type="number"
                      name="tuoi"
                      value={editFormData.tuoi}
                      onChange={handleEditChange}
                      className="border px-2 py-1 w-full rounded"
                    />
                  </div>
                  <div className="mb-2">
                    <label>Lớp:</label>
                    <input
                      type="text"
                      name="lop"
                      value={editFormData.lop}
                      onChange={handleEditChange}
                      className="border px-2 py-1 w-full rounded"
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={handleSaveEdit}
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                      Lưu
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="bg-gray-400 text-white px-3 py-1 rounded"
                    >
                      Hủy
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <div>
                    <p>Họ tên: {item.hoTen}</p>
                    <p>Tuổi: {item.tuoi}</p>
                    <p>Lớp: {item.lop}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleEditClick(item)}
                      className="text-lg bg-blue-400 text-white rounded-lg px-3 py-2"
                    >
                      Sửa
                    </button>
                    <button
                      onClick={() => handleDeleteStudent(item.id)}
                      className="text-lg bg-red-400 text-white rounded-lg px-3 py-2"
                    >
                      Xóa
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
