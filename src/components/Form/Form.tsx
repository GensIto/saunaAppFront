import { Button, FormControlLabel, FormGroup, Switch } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { style } from './styled'

const Form: React.FC = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <FormControlLabel
          control={<Switch defaultChecked {...register('label')} />}
          label="Label"
        />
      </FormGroup>

      <Button type="submit" variant="contained" sx={style.button1}>
        送信
      </Button>
    </form>
  )
}

export default Form
