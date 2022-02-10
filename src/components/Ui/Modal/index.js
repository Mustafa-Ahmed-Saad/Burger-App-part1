import React from 'react';
import Auxiliary from '../../../HOC/Auxiliary';
import Backdrop from '../Backdrop';
import classes from './style.module.css';
import { PropTypes } from 'prop-types';

const Modal = ({ children, show, modalClocsed }) => {
  console.log('Modal reder');

  // componentDidUpdate;
  // const isInitialMount = useRef(true);
  // useEffect(() => {
  //   if (isInitialMount.current) {
  //     isInitialMount.current = false;
  //   } else {
  //     console.log('[Modal updated]');
  //   }
  // });

  return (
    <Auxiliary>
      <Backdrop show={show} clicked={modalClocsed} />
      <div
        className={classes.Modal}
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-20vh)',
          opacity: show ? '1' : '0',
          visibility: show ? 'unset' : 'hidden',
        }}
      >
        {children}
      </div>
    </Auxiliary>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool,
  modalClocsed: PropTypes.func,
};

// we can use React.memo inested of shouldComponentUpdate
// this component Modal will render or not this dependant of show if it when show defferent this compoenent will render
// this like shouldComponentUpdate
const areEqual = (a, b) => {
  console.log('a', a);
  console.log('b', b);
  // render this component if show that in props changed or if children changed
  // we can using &&

  // if error
  if (b.children === null || a.children === null) {
    return b.children === a.children && a.show === b.show;
  }
  // question mark here because if error a.children will be null so we can get type from null
  return b.children?.type?.name === a.children?.type?.name && a.show === b.show;

  // or if we using & this is correct
  // return (b.children.type.name === a.children.type.name) & (a.show === b.show);
  // or
  // return !(b.children.type.name !== a.children.type.name || a.show !== b.show);
};

export default React.memo(Modal, areEqual); // if true will not render   // if false will render
