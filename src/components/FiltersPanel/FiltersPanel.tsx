import './FiltersPanel.css';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { CATEGORY_NAMES } from '../../constants';
import { updateFilters } from '../../store/mainSlice';
import {
  getFilterCategoryIds,
  getFiltersDateFrom,
  getFiltersDateTo,
} from '../../store/selectors';
import { ExpensesCategory } from '../../types';

function FiltersPanel() {

  const dispatch = useDispatch();

  const categoryIds = useSelector(getFilterCategoryIds);
  const dateFrom = useSelector(getFiltersDateFrom);
  const dateTo = useSelector(getFiltersDateTo);

  const handleCategoriesChange = (event: SelectChangeEvent) => dispatch(
    updateFilters({ categoryIds: event.target.value as unknown as Array<ExpensesCategory> })
  );
  const handleDateFromChange = (momentDate: any) => dispatch(
    updateFilters({ dateFrom: momentDate.toISOString() })
  );
  const handleDateToChange = (momentDate: any) => dispatch(
    updateFilters({ dateTo: momentDate.toISOString() })
  );

  return (
    <div className="filters-panel">
        <h1>Filters</h1>
        <div className="filters-panel__controls">
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="categories-select-label">Categories</InputLabel>
                    <Select
                        labelId="categories-select-label"
                        id="categories-select"
                        value={categoryIds as any}
                        label="Categories"
                        onChange={handleCategoriesChange}
                        multiple
                    >
                        {Object.entries(CATEGORY_NAMES).map(([k, v]) => <MenuItem key={k} value={k}>{v}</MenuItem>)}
                    </Select>
                </FormControl>
            </Box>
            <div className="filters-panel__date">
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DatePicker label="Date from" value={dateFrom} onChange={handleDateFromChange} />
                </LocalizationProvider>
                &mdash;
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DatePicker label="Date to" value={dateTo} onChange={handleDateToChange} />
                </LocalizationProvider>
            </div>
        </div>
    </div>
    )
}

export default FiltersPanel;
