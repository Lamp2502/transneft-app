import React from 'react'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { makeStyles } from '@material-ui/core/styles'

const StyledSelect = styled(Select)`
  fieldset {
    border-radius: 8px;
    width: 179px;
    height: 38px;
    margin-top: 10px;
    box-shadow: 0 0 3px rgba(27, 27, 27, 0.2);
  }
`

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  select: {},
  icon: {
    marginRight: '-10px',
    color: 'black',
    width: '28px',
    height: '28px',
  },
  iconOpen: {
    transform: 'none',
  },
  formControlLabel: {
    left: 24,
  },
  selectSelect: {
    display: 'flex',
    width: '100%',
  },
}))


export default function BasicSelect() {
  const classes = useStyles()
  const [status, setStatus] = React.useState('')

  const handleChange = (event: any) => {
    setStatus(event.target.value)
  }

  return (
    <Box sx={{ minWidth: 190 }}>
      <FormControl fullWidth>
        <StyledSelect
          id='demo-simple-select'
          value={status}
          onChange={handleChange}
          classes={{
            icon: classes.icon,
            iconOpen: classes.iconOpen,
            select: classes.selectSelect,
          }}
          IconComponent={KeyboardArrowDownIcon}
        >
          <MenuItem value={1}>Статус</MenuItem>
          <MenuItem value={2}>Статус 2</MenuItem>
          <MenuItem value={3}>Статус 3</MenuItem>
        </StyledSelect>
      </FormControl>
    </Box>
  )
}