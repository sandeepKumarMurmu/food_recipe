//Button for apply filter
export const Button = ({
  queryArrangement,
  filter,
  getDataOnFilter,
  setQuery,
  query,
}) => {
  return (
    <>
      <button
        className="btn btn-success"
        data-bs-dismiss="offcanvas"
        onClick={() => {
          queryArrangement(filter, setQuery, query);
          getDataOnFilter(query);
        }}
      >
        Apply Filter
      </button>
    </>
  );
};
