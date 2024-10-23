import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterFielt={"discount"}
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "widh-discount", label: "With Discount" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
