import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NoteUploadForm from "./NoteUploadForm";
import UserNotesList from "./UserNotesList";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8080/api/user/me", {
      headers: { "Authorization": `Bearer ${token}` }
    })
      .then(res => {
        if (!res.ok) throw new Error("Failed to load profile");
        return res.json();
      })
      .then(data => {
        setUser(data);
        setForm({ name: data.name, email: data.email });
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [token]);

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  function handleEdit() {
    setEdit(true);
  }

  function handleCancel() {
    setEdit(false);
    setForm({ name: user.name, email: user.email });
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSave() {
    fetch("http://localhost:8080/api/user/me", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({ name: form.name }),
    })
      .then(res => {
        if (!res.ok) throw new Error("Failed to update profile");
        return res.json();
      })
      .then(data => {
        setUser(data);
        setEdit(false);
      })
      .catch(() => alert("Update failed"));
  }

  if (loading) {
    return <div className="text-center mt-12 text-indigo-300">Loading...</div>;
  }

  if (!user) {
    return <div className="text-center mt-12 text-red-400">Could not load profile.</div>;
  }

  return (
    <div className="min-h-screen bg-[#181f2b] py-12 px-2">
      <div className="max-w-6xl mx-auto">
        {/* Top: Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Personal Details */}
          <div className="bg-[#232b3b] rounded-2xl shadow-xl p-8 flex flex-col justify-between h-full border border-[#30384a] min-h-[320px]">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-indigo-400">Profile</h2>
              <div className="space-y-5">
                <div>
                  <label className="font-medium text-gray-400">Email:</label>
                  <div className="text-gray-200">{user.email}</div>
                </div>
                <div>
                  <label className="font-medium text-gray-400">Name:</label>
                  {edit ? (
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="border border-[#30384a] px-2 py-1 rounded w-full bg-[#181f2b] text-gray-200"
                    />
                  ) : (
                    <div className="text-gray-200">{user.name}</div>
                  )}
                </div>
                <div>
                  <label className="font-medium text-gray-400">Wallet Balance:</label>
                  <div className="text-indigo-400 font-semibold">₹{user.walletBalance}</div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex gap-3">
              {edit ? (
                <>
                  <button
                    onClick={handleSave}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="bg-gray-700 text-gray-200 px-4 py-2 rounded-xl hover:bg-gray-600 transition"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleEdit}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-700 transition ml-auto"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Right: Upload Form */}
          <div className="bg-[#232b3b] rounded-2xl shadow-xl p-8 h-full border border-[#30384a] min-h-[320px] flex flex-col">
            <NoteUploadForm token={token} />
          </div>
        </div>

        {/* Full width: User Notes List */}
        <div className="mt-10">
          <UserNotesList token={token} />
        </div>
      </div>
    </div>
  );
}
