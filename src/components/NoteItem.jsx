const NoteItem = ({ items, focus }) => {
  return (
    <div className="note-container">
      {items.length > 0
        ? items.map((item) => (
            <div
              className="note-item"
              style={{ backgroundColor: item.bgColor }}
              key={item.id}>
              {item.note}
            </div>
          ))
        : focus && <div className="note-not-found">Note Not Found</div>}
    </div>
  );
};

export default NoteItem;
