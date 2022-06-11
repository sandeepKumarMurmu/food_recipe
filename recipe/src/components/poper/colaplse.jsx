export const Colapse = ({ props, filter, setFilter }) => {
  const id = props[0].type;
  let temp = id.split("");

  temp[0] = temp[0].toUpperCase();

  //handel filter function
  function handelFilter(ele) {
    setFilter({ ...filter, [ele.type]: ele.APIParameter });
  }
  return (
    <>
      <button
        className="btn btn-light"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={"#" + id}
        aria-expanded="false"
        aria-controls={id}
        style={{ fontWeight: "bold" }}
      >
        {temp.join("")}
      </button>
      <div className="collapse" id={id}>
        <div className="card card-body">
          <ul style={{ listStyleType: "none" }}>
            {props.map((ele, i) => (
              <li
                key={i}
                className="props_li"
                onClick={() => {
                  handelFilter(ele);
                }}
              >
                {ele.webLabel}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
