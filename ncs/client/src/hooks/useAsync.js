import { useCallback, useEffect, useState } from "react";

export const useAcync = (func, dependencies = []) => {
  const { execute, ...state } = useAcyncInternal(func, dependencies, true);

  useEffect(() => {
    execute();
  }, [execute]);

  return state;
};

export const useAcyncFn = (func, dependencies = []) => {
  return useAcyncInternal(func, dependencies, false);
};

const useAcyncInternal = (func, dependencies = [], initialLoading = false) => {
  const [loading, setLoading] = useState(initialLoading);
  const [error, setError] = useState();
  const [value, setValue] = useState();

  const execute = useCallback((...params) => {
    setLoading(true);
    return func(...params)
      .then((data) => {
        setValue(data);
        setError(undefined);
        return data;
      })
      .catch((erorr) => {
        setError(erorr);
        setValue(undefined);
        return Promise.reject(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, dependencies);

  return { loading, error, value, execute };
};
