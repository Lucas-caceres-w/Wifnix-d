import { Skeleton } from "@mui/material";

function SkeletonAdmin() {
  return (
    <tr className="flex flex-row gap-2 w-full h-full justify-between">
      <td>
        <Skeleton width={"150px"} height={"20px"} />
      </td>
      <td>
        <Skeleton width={"150px"} height={"20px"} />
      </td>
      <td>
        <Skeleton width={"150px"} height={"20px"} />
      </td>
      <td>
        <Skeleton width={"150px"} height={"20px"} />
      </td>
      <td>
        <Skeleton width={"150px"} height={"20px"} />
      </td>
      <td>
        <Skeleton width={"150px"} height={"20px"} />
      </td>
      <td>
        <Skeleton width={"50px"} height={"15px"} />
        <Skeleton width={"50px"} height={"15px"} />
      </td>
    </tr>
  );
}

export default SkeletonAdmin;
