import { useEffect } from 'react';
import toast from 'react-hot-toast';

const CustomToast = ({ children }) => {
  const handleToast = ms => {
    toast(ms);
  };
  return <div>{handleToast(children)}</div>;
};

export default CustomToast;
