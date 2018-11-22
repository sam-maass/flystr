import React from 'react';
import PropTypes from 'prop-types';
import { openGlobalModal } from '../../actions/modalActions';
import { connect } from 'react-redux';

const InnerModalLink = ({ modal, children, openGlobalModal }) => {
  const openModal = () => openGlobalModal(modal);
  return (
    <a href={`#${modal}`} onClick={openModal}>
      {children}
    </a>
  );
};

InnerModalLink.propTypes = {
  modal: PropTypes.string,
  children: PropTypes.node,
  openGlobalModal: PropTypes.func
};

export const ModalLink = connect(
  null,
  { openGlobalModal }
)(InnerModalLink);
