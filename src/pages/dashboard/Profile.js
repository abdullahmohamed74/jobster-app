import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { FormRow } from '../../components';
import { userUpdate } from '../../store';
import Wrapper from '../../utils/DashboardFormWrapper';

function Profile() {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    lastName: user?.lastName || '',
    location: user?.location || '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, lastName, location, email } = userData;

    if (!name || !lastName || !location || !email) {
      toast.error('please fill out all fields');
      return;
    }

    // patch request to update user data
    dispatch(userUpdate({ name, lastName, location, email }));
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <Wrapper>
      <h3>Profile</h3>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-center">
          {/* name field */}
          <FormRow
            type="text"
            name="name"
            value={userData.name}
            handleChange={handleChange}
          />
          {/* last name field */}
          <FormRow
            type="text"
            labelText="last name"
            name="lastName"
            value={userData.lastName}
            handleChange={handleChange}
          />
          {/* email field */}
          <FormRow
            type="email"
            name="email"
            value={userData.email}
            handleChange={handleChange}
          />
          {/* location field */}
          <FormRow
            type="text"
            name="location"
            value={userData.location}
            handleChange={handleChange}
          />
          <button type="submit" className="btn btn-block" disabled={isLoading}>
            {isLoading ? 'please wait...' : 'save changes'}
          </button>
        </div>
      </form>
    </Wrapper>
  );
}

export default Profile;
