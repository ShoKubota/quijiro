import React, { Fragment, useEffect } from 'react';

//apis
import { fetchQuestions } from '../apis/questions';

export const Questions = () => {

  useEffect(() => {
    fetchQuestions()
    .then((data) =>
      console.log(data)
    )
  }, [])

  return(
    <>
      問題一覧
    </>
  )
}