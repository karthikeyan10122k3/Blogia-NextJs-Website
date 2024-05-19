// "use client";

import { auth } from "@/auth";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import AddPostForm from "@/components/dashboard/AddPostForm";
import YourPostSection from "@/components/dashboard/YourPostSection";

export const metadata = {
  title: "Dashboard ",
  description: "Created for Bloggers",
};

const getData = async (username) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/posts?username=${username}`,
      {
        headers: {
          "Cache-Control": "no-cache",
        },
      }
    );
    const post = response.data;
    return post;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};

const Dashboard = async () => {
  const session = await auth();
  const username = session?.user.name;
  const data = await getData(username);

  if (!session?.user) {
    redirect("/dashboard/login");
  }
  if (session?.user) {
    return (
      <div className="d-flex align-items-start justify-content-around vh-80 mt-5">
        <div className="w-50">
          <YourPostSection data={data} />
        </div>
          <AddPostForm username={username} />
      </div>
    );
  }
};

export default Dashboard;
