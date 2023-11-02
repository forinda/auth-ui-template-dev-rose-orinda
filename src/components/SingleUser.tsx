import { User } from "../types";
type Props = {
  user: User;
};
function SingleUser({ user }: Props) {
  return (
    <div className="flex flex-col h-screen ">
      {" "}
      <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
        User Details{" "}
      </h2>
      <form className="mt-10" method="POST">
        <label
          htmlFor="email"
          className="block text-xs font-semibold text-gray-600 uppercase"
        >
          E-mail
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder={user.email}
          autoComplete="email"
          className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
          required
        />

        <label
          htmlFor="name"
          className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
        >
          Name{" "}
        </label>
        <input
          id="name"
          type="text"
          name="text"
          placeholder={user.name}
          autoComplete="current-password"
          className="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
          required
        />
        <label
          htmlFor="name"
          className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
        >
          Field{" "}
        </label>
        <input
          id="name"
          type="text"
          name="role"
          placeholder={user.field}
          autoComplete="current-field"
          className="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
          required
        />
        <label
          htmlFor="name"
          className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
        >
          Role{" "}
        </label>
        <select
          id="name"
          name="filed"
          placeholder={user.field}
          autoComplete="current-field"
          className="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
          required
        >
            <option value="user">USER</option>
            <option value="admin">ADMIN</option>
        </select>

        <button
          type="submit"
          className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none"
        >
          Edit
        </button>
      </form>
    </div>
  );
}

export default SingleUser;
