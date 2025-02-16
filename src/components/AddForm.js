import "./AddForm.css";

export default function AddForm(props) {
  const { title, setTitle, saveTask,editId } = props;

  return (
    <>
      <h2>ແບບຟອມຈັດການງານ</h2>
      <form onSubmit={saveTask}>
        <div className="form-control">
          <input
            type="text"
            className="text-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => e.key === " " && title.trim() === "" && e.preventDefault()} 
            placeholder="ປ້ອນຊື່ງານ..."
            aria-label="ຊື່ງານ"
          />
          <button type="submit" className="submit-btn">
             {editId ? "ອັບເດັດ" : "ເພີ່ມ"}
          </button>
        </div>
      </form>
    </>
  );
}
