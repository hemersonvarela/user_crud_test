import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import {BsFillTrashFill} from "react-icons/bs";

export default (props) => {

    function destroy() {
        if (confirm('Are you sure you want to delete this user?')) {
            Inertia.delete(route('users.destroy', props.id));
        }
    }

  return (
      <div className="relative flex">
        <button
          onClick={destroy}
        >
            <BsFillTrashFill size="1.3em"/>
        </button>
      </div>
  );
};
