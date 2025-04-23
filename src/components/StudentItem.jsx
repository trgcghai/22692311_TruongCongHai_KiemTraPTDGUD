import React from "react";

const StudentItem = ({ student, onEdit, onDelete }) => {
  return (
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
  );
};

export default StudentItem;
