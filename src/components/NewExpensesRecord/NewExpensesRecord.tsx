import './NewExpensesRecord.css';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { CATEGORY_NAMES } from '../../constants';
import {
  addNewExpensesRecord,
  cancelNewRecordEditing,
  completeNewRecordEditing,
  updateEditingExpensesRecord,
} from '../../store/mainSlice';
import {
  getEditingExpensesRecord,
  isNewExpensesRecordEditing,
} from '../../store/selectors';

function NewExpensesRecord() {

  const dispatch = useDispatch();

  const isEditing = useSelector(isNewExpensesRecordEditing);
  const editingExpensesRecord = useSelector(getEditingExpensesRecord);

  const handleAddNewClick = () => dispatch(addNewExpensesRecord());
  const handleCompleteNewRecordEditing = () => dispatch(completeNewRecordEditing());
  const handleCancelNewRecordEditing = () => dispatch(cancelNewRecordEditing());
  const handleCategoryChange = (event: SelectChangeEvent) => dispatch(
    updateEditingExpensesRecord({ categoryId: Number(event.target.value) })
  );
  const handleAmountChange = (event: any) => dispatch(
    updateEditingExpensesRecord({ amount: Number(event.target.value || 0) })
  );
  const handleDateChange = (momentDate: any) => dispatch(updateEditingExpensesRecord({ date: momentDate.toISOString() }));

  return (
    <div className='new-record'>
        {isEditing && (
            <div className="new-record__content">
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="category-select-label">Category</InputLabel>
                        <Select
                            labelId="category-select-label"
                            id="category-select"
                            value={editingExpensesRecord?.categoryId as unknown as string}
                            label="Category"
                            onChange={handleCategoryChange}
                        >
                            {Object.entries(CATEGORY_NAMES).map(([k, v]) => <MenuItem key={k} value={k}>{v}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Box>
                <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale="gb">
                    <DatePicker onChange={handleDateChange} />
                </LocalizationProvider>
                <Box
                    component="form"
                    sx={{'& > :not(style)': { m: 1, width: '25ch' }}}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-basic"
                        type="number"
                        label="Amount"
                        variant="outlined"
                        onChange={handleAmountChange}
                    />
                </Box>
            </div>
        )}
        <div className="new-record__buttons">
            {isEditing ? (<>
                <Button onClick={handleCompleteNewRecordEditing} variant="contained">Done</Button>
                <Button onClick={handleCancelNewRecordEditing} variant="outlined">Cancel</Button>
            </>) : (
                <Button onClick={handleAddNewClick} variant="contained">Add new</Button>
            )}
        </div>
    </div>
    )
}

export default NewExpensesRecord;
