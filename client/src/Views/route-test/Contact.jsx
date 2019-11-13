import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ history }) => {
  // redirect function after 2second
  setTimeout(() => history.push('/KIK/About'), 2000);

  Contact.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    history: PropTypes.object.isRequired
  };

  return (
    <div>
      <h4>Contact Router</h4>
      <p>this page will redirect you back to &quot;/about`&quot; after 2s</p>
    </div>
  );
};

export default Contact;
