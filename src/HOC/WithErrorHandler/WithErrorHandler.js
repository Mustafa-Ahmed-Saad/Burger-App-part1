import React, { useEffect, useLayoutEffect, useState } from 'react';
import Modal from '../../components/Ui/Modal';
import Auxiliary from '../Auxiliary';

// this must be small component because this is HOC not Component => withErrorHandler is normal function return component so if you want to use any hook like useState or useEffect you should make w small in withErrorHandler
const withErrorHandler = (WrappedComponent, axiosInstance) => {
  // requestVariable and responseVariable to clean up when componentWillUnmount
  let requestVariable;
  let responseVariable;

  return (props) => {
    const [error, setError] = useState(null);

    // here we need to do this code before render elements so we can't use componentDidMount so we need to use componentWillMount (useLayoutEffect) because we need to do this code before componentDidMount of child run
    useLayoutEffect(() => {
      // when we use with axios and axios.interceptors and promisses and server we should write the code inside life circle hooks but wen use axios.put or axios.post or axios delete we can use this in the normal function
      // so if we use this code in another out of useLayoutEffect this will may be a problem issu
      // set error = null before send request
      requestVariable = axiosInstance.interceptors.request.use((request) => {
        setError(null);
        return request;
      });
      // handel success and faild
      responseVariable = axiosInstance.interceptors.response.use(
        // if response success
        (response) => response,
        // if response error
        (err) => {
          setError(err);
        }
      );
    }, []);

    // componentWillUnmount to clean up interceptors
    useEffect(() => {
      // clean requestVariable and responseVariable
      return () => {
        console.log('componentWillUnmount ', requestVariable, responseVariable);
        axiosInstance.interceptors.request.eject(requestVariable);
        axiosInstance.interceptors.response.eject(responseVariable);
        console.log('componentWillUnmount => withError');
      };
    }, []);

    // used to closed modal
    const errorConfirmedHandler = () => {
      setError(null);
      // return Promise.reject(error);
    };

    return (
      <Auxiliary>
        {console.log('*************************************')}
        {console.log('render => withError')}
        {console.log(`showModal: ${error ? 'true' : 'false'} => withError`)}
        {console.log('*************************************')}
        <Modal show={error ? true : false} modalClocsed={errorConfirmedHandler}>
          {/* TODO: try this */}
          {/* <Modal show={error} modalClocsed={errorConfirmedHandler}> */}
          {error ? error.message : null}
        </Modal>
        {/* you can pass {...props} or not brcause this props don't content any new thing */}
        <WrappedComponent {...props} />
      </Auxiliary>
    );
  };
};

export default withErrorHandler;
