import * as React from 'react'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'
import DateRangeIcon from '@mui/icons-material/DateRange'
import { styled } from '@mui/material/styles'

const StyledTextField = styled(TextField)`
  fieldset {
    border-radius: 8px;
    outline-style: none;
    height: 38px;
    margin-top: 2px;
    box-shadow: 0 0 3px rgba(27, 27, 27, 0.2);
  }
`

export default function MaterialUIPickers() {
  const [value, setValue] = React.useState(new Date('2022-08-18T21:11:54'))
  const color = 'blue'

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <DatePicker
          // views={["year", "month"]}
          value={value}
          onChange={(newValue: any) => setValue(newValue)}
          InputAdornmentProps={{}}
          components={{
            OpenPickerIcon: DateRangeIcon,
          }}
          renderInput={(params) =>
            <StyledTextField size='small'
                             sx={{ width: '181px', svg: { color } }}
                             {...params} />
          }
        />
      </Stack>
    </LocalizationProvider>
  )
}