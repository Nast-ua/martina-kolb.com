import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


function NavLink({ text, path }) {
  return (
    <div>
      <h3 className="ml-2 px-4 pb-2 relative text-xl hover:text-gray-700">
        <Link className="custom-link" to={`/${path}`}>
          {text}
        </Link>
      </h3>
    </div>
  );
}

NavLink.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

export default NavLink;
