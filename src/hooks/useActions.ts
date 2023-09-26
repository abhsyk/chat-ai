import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { actionCreators } from '../state';

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    // combine all action creator into obj
    return bindActionCreators(actionCreators, dispatch);
  }, [dispatch]);
};
