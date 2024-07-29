import Image from "next/image";
import chatappimage from "@/app/assets/chatappbg.jpg";
import bookstorebg from "@/app/assets/bookstorebg.png";
import adminpanelbg from "@/app/assets/adminpanel.jpg";
import Link from "next/link";

export default function project() {
  return (
    <div className="bg-gray-950 h-[240vh] md:h-[79vh] w-full ">
      <div className="flex flex-col md:flex-row  justify-center md:gap-5 md:p-5 gap-20 mt-10 items-center ">
        <div className="card bg-base-100 w-80 md:w-96 h-[30rem] md:h-[28rem] shadow-xl">
          <figure>
            <Image src={chatappimage} alt="chatapp" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Chat Application</h2>
            <p>
              A chat app built with the MongoDB, Express.js, React, Node.js
              enables real-time messaging and user authentication with dynamic
              UI updates.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <Link href="https://chatapp-project-57sf.onrender.com">
                  <p>project link</p>
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-80 md:w-96  h-[30rem]  md:h-[28rem] shadow-xl">
          <figure>
            <Image src={bookstorebg} alt="book" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Book Store</h2>
            <p>
              A bookstore inventory management system built with the MERN stack
              MongoDB, Express.js, React, Node.js allows for efficient tracking
              of book stock with a user-friendly interface and real-time
              updates.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <Link href="https://github.com/yash2154/Bookstore">
                  <p>project link</p>
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-80 md:w-96  h-[30rem]  md:h-[28rem] shadow-xl">
          <figure>
            <Image src={adminpanelbg} alt="adminpanel" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">College Admin Panel</h2>
            <p>
              A college admin panel built with Next.js and Express.js provides a
              dynamic and efficient interface for managing student records,
              courses, and faculty data, featuring secure authentication and
              real-time updates.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <Link href=" https://college-admin-panel.vercel.app/login">
                  <p>project link</p>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
