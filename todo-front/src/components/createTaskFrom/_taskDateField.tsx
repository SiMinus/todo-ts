import React, { FC, ReactElement } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { IDateField } from './interfaces/IDateField';
import PropTypes from 'prop-types';
 
export const TaskDateField: FC<IDateField> = (
  props,
): ReactElement => {
  // Destructure props
  const {
    value = new Date(),
    disabled = false,
    onChange = (date) => console.log(date),
  } = props;
 
  return (
    <>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DemoContainer components={['DatePicker']}>
            <DatePicker
                label="Task Date"
                format="dd/MM/yyyy"
                value={value}
                onChange={onChange}
                disabled={disabled}
                sx={{ width: '100%' }}
            />
            </DemoContainer>
        </LocalizationProvider>
    </>
  );
};
 
TaskDateField.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.instanceOf(Date),
};
