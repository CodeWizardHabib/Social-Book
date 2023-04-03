import React from 'react'
import './SubmitButton.css'
export default function SubmitButton({text,submitText}) {
  return (
    <button className="submit-button"  type='submit'>{submitText}</button>
  )
}
