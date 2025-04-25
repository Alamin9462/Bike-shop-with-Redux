import { UserCircleIcon } from "@heroicons/react/24/outline";

const Profile = () => {
    return (
        <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl shadow-lg">
        <h1 className="text-3xl font-semibold mb-6">Profile</h1>
      
        {/* Profile Header */}
        <div className="flex items-center gap-6 mb-8 bg-white p-6 rounded-xl shadow-md">
          <UserCircleIcon className="h-24 w-24 text-indigo-600" />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
            <p className="text-lg text-gray-600">johndoe@email.com</p>
            <p className="mt-2 text-sm text-gray-400">Joined: January 2022</p>
          </div>
        </div>
      
        {/* Edit Profile Section */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Edit Profile Information</h2>
          <div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium">Full Name</label>
              <input
                type="text"
                value="John Doe"
                className="mt-2 p-4 w-full rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium">Email Address</label>
              <input
                type="email"
                value="johndoe@email.com"
                className="mt-2 p-4 w-full rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex gap-4">
              <button className="bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                Save Changes
              </button>
              <button className="bg-gray-200 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">
                Cancel
              </button>
            </div>
          </div>
        </div>
      
        {/* Change Password Section */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Change Password</h2>
          <div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium">Old Password</label>
              <input
                type="password"
                className="mt-2 p-4 w-full rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium">New Password</label>
              <input
                type="password"
                className="mt-2 p-4 w-full rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium">Confirm New Password</label>
              <input
                type="password"
                className="mt-2 p-4 w-full rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button className="bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400">
              Change Password
            </button>
          </div>
        </div>
      </div>
      
    );
};

export default Profile;