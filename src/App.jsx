import "./App.css";

function App() {
  return (
    <div className="container mx-auto p-4">
      <div>
        <h1 className="text-2xl font-bold text-center mb-4">Danh sach sinh vien</h1>
        <div>
          <div className="flex items-center justify-between p-2 border rounded-lg">
            <div>
              <p>Ho ten: Nguyen Van A</p>
              <p>Tuoi: 20</p>
              <p>Lop: CNTT1</p>
            </div>
            <div>
              <button className="text-lg bg-red-400 text-white rounded-lg px-3 py-2">Xoa</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
