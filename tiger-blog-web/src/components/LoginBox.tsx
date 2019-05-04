import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  Input,
  InputLabel
} from '@material-ui/core';
import React, { useState, useContext } from 'react';
import { UserModel } from '../models/user';
import LoadingOverlay from '../styles/components/LoadingOverlay';
import { AppContext } from '../App';

interface IProps {
  isOpen: boolean;
  close: () => void;
}

const LoginBox: React.FunctionComponent<IProps> = props => {
  const context = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);
  const [userModel, setUserModel] = useState({
    UserId: -1,
    UserName: '',
    Password: ''
  } as UserModel);

  return (
    <div>
      <Dialog
        open={props.isOpen}
        onClose={props.close}
        disableBackdropClick={isLoading}
      >
        <DialogTitle>Log In To Manage Blog Posts</DialogTitle>
        <form
          onSubmit={e => {
            e.preventDefault();
            setIsLoading(true);
            handleLogin(userModel, () => {
              context.setUser(userModel);
              setIsLoading(false);
              props.close();
            });
          }}
        >
          <DialogContent>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="username">User Name</InputLabel>
              <Input
                id="username"
                name="username"
                autoFocus
                value={userModel.UserName}
                onChange={e =>
                  setUserModel({ ...userModel, UserName: e.target.value })
                }
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                value={userModel.Password}
                onChange={e =>
                  setUserModel({ ...userModel, Password: e.target.value })
                }
              />
            </FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  checked={userModel.RememberMe}
                  onChange={e =>
                    setUserModel({ ...userModel, RememberMe: e.target.checked })
                  }
                  color="primary"
                />
              }
              label="Remember me"
            />
          </DialogContent>
          <DialogActions>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Sign in
            </Button>
          </DialogActions>
        </form>
        {isLoading && <LoadingOverlay />}
      </Dialog>
    </div>
  );
};

const handleLogin = (user: UserModel, successCb: any) => {
  setTimeout(() => {
    successCb();
  }, 1500);
};

export default LoginBox;
