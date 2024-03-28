import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className="bg-gray-800 flex justify-end items-center py-4 px-8">
      <ul className="flex space-x-4">
  
        <li>
          <Link to='/login' className="text-white  hover:text-gray-600">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
