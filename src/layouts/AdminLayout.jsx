import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      {/* No Header here */}
      <Outlet />
    </>
  );
};

export default AdminLayout;
