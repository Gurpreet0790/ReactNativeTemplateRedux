import React, {useState} from 'react';
import Loader from './Loader';

const useLoader = () => {
  const [loading, setLoading] = useState(false);

  return [
    loading ? <Loader /> : null,
    () => setLoading(true),
    () => setLoading(false),
  ];
};

export default useLoader;
