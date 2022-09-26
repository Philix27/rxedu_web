import Link from "next/link";
import React from "react";
import { BiUser, BiCart, BiSearch, BiMoney } from "react-icons/bi";
import { AiFillPlusCircle, AiOutlinePullRequest } from "react-icons/ai";
import { FaFileMedical } from "react-icons/fa";

export default function Admin({ articlesCategoryList }) {
  return (
    <div className="admin section">
      <Link href="admin/articles">
        <a>
          <div className="card">
            <AiFillPlusCircle />
            <h3>Article/Note</h3>
          </div>
        </a>
      </Link>
      <Link href="admin/brand">
        <a>
          <div className="card">
            <BiCart />
            <h3>Brand Names</h3>
          </div>
        </a>
      </Link>
      <Link href="admin/generic">
        <a>
          <div className="card">
            <BiUser />
            <h3>Generic Names</h3>
          </div>
        </a>
      </Link>
      <Link href="admin/mcq_add">
        <a>
          <div className="card">
            <FaFileMedical />
            <h3>Questions/MCQs</h3>
          </div>
        </a>
      </Link>
      <Link href="admin/addpepnotes">
        <a>
          <div className="card">
            <AiOutlinePullRequest />
            <h3>PEP Notes</h3>
          </div>
        </a>
      </Link>
      <Link href="admin/mcq_pep">
        <a>
          <div className="card">
            <BiSearch />
            <h3>PEP MCQs</h3>
          </div>
        </a>
      </Link>
      <Link href="admin/#">
        <a>
          <div className="card">
            <BiSearch />
            <h3>Users</h3>
          </div>
        </a>
      </Link>
      <Link href="admin/#">
        <a>
          <div className="card">
            <BiSearch />
            <h3>Active subscribers</h3>
          </div>
        </a>
      </Link>
      <Link href="admin/blogs">
        <a>
          <div className="card">
            <BiSearch />
            <h3>Blogs</h3>
          </div>
        </a>
      </Link>
    </div>
  );
}
