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

import { CATEGORY_NAMES } from '../../constants';
import { updateFilters } from '../../store/mainSlice';
import { getFilterCategoryIds } from '../../store/selectors';
import { ExpensesCategory } from '../../types';

function FiltersPanel() {

  const dispatch = useDispatch();

  const categoryIds = useSelector(getFilterCategoryIds);

  const handleCategoriesChange = (event: SelectChangeEvent) => dispatch(
    updateFilters({ categoryIds: event.target.value as unknown as Array<ExpensesCategory> })
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
        </div>
    </div>
    )
}

export default FiltersPanel;
