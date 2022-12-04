import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { Text, Button } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(selectUser);

  return (
    <>
      <div>
        <Text>{user.email}</Text>
      </div>

      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </>
  );
};
