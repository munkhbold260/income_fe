import React, { useState } from "react";

export default function Home() {
  // const add_url = "http://localhost:4000/user-add";
  const del_url = "http://localhost:4000/user-delete";
  const get_url = "http://localhost:4000/user-get";

  const [users, setUsers] = useState([]);

  async function handleGet(e) {
    e.preventDefault();

    // console.log("pressed get button");

    const fetched_data = await fetch(get_url);
    const fetched_json = await fetched_data.json();
    const userlist = fetched_json;
    console.log("userlist", userlist);
    setUsers(userlist);
  }

  async function handleDelete(e) {
    e.preventDefault();
    console.log("working delete btn");
    const data = { id: e.target.qwer.value };
    console.log("userlist-id", data);

    const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    const fetched_data = await fetch(del_url, options);
    const fetched_json = await fetched_data.json();
  }

  return (
    <div className="flex flex-col gap-10 p-[100px]">
      <form className=" bg-red-50 flex gap-4 w-[600px]" onSubmit={handleGet}>
        <input type="submit" value="Get" className="bg-blue-300 w-1/3 h-10" />{" "}
      </form>

      <div className=" bg-green-200 h-[400px] w-[600px] flex flex-col gap-5">
        end l fetch hiisnee haruulnadaa
        <div className="flex flex-col gap-5">
          {users.map((a, id) => {
            return (
              <div key={id} className="bg-orange-100 flex gap-5">
                <p></p>
                <p className="bg-blue-200">name: {a.name}</p>
                <p> {a.id}</p>
                <p>{a.email}</p>
                <form onSubmit={handleDelete} className="flex gap-5">
                  {/* <input
                    className="bg-blue-200"
                    type="text"
                    name="id"
                    id="qwer"
                  /> */}
                  <button
                    className="bg-blue-200"
                    id="qwer"
                    value={a.id}
                    type="submit"
                  >
                    delete
                  </button>
                </form>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
