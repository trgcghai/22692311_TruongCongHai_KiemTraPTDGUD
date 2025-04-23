import { Link } from "react-router-dom";
import "./App.css";
import data from "./data";

function App() {
  return (
    <div className="container mx-auto p-4">
      <div>
        <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-center">
          Danh sach sinh vien
        </h1>
          <Link to={'/add-new-student'} className="text-lg bg-blue-500 text-white rounded-lg px-3 py-2">
            Them sinh vien
          </Link>
        </div>
        <div className="space-y-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-2 border rounded-lg"
            >
              <div>
                <p>Ho ten: {item.hoTen}</p>
                <p>Tuoi: {item.tuoi}</p>
                <p>Lop: {item.lop}</p>
              </div>
              <div>
                <button className="text-lg bg-red-400 text-white rounded-lg px-3 py-2">
                  Xoa
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
