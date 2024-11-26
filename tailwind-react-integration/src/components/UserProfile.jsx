
function UserProfile() {
    

    return (
      <div className="bg-gray-100 p-8 md:max-w-sm mx-auto my-20 rounded-lg shadow-lg md:p-8 sm:p-4 sm:max-w-xs">
        <img className='rounded-full   mx-auto md:w-36 md:h-36 sm:w-24 sm:h-24'src="https://via.placeholder.com/150" alt="User" />
        <h1 className="  text-blue-800 my-4 md:text-xl sm:text-lg">John Doe</h1>
        <p className=" text-gray-600 md:text-base sm:text-sm">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
export default UserProfile;