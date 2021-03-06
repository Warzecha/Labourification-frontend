import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const ValidatedTextInputField = (props) => {
    const {field, variant = 'outlined'} = props;
    return (
        <TextField
            value={field.value}
            error={!!field.error}
            onBlur={field.handleBlur}
            helperText={field.error || ' '}
            onChange={field.handleChange}
            variant={variant}
            style={{flexGrow: 1}}
            {...props}
        />
    );
};

ValidatedTextInputField.propTypes = {
    label: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['outlined', 'filled']),
    field: PropTypes.object.isRequired,
    type: PropTypes.string,
};

export default ValidatedTextInputField;
