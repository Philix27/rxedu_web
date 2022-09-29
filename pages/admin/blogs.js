import React from "react";
import AdminBlogComp from "../../comps/admin/blogs";
import Axios from "axios";

export default function AdminBlogs() {
  return (
    <div className="section">
      {/* <h2>Blogs admin page</h2> */}
      <AdminBlogComp title="Blogs" />
    </div>
  );
}
