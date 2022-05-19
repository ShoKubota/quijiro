import axios from 'axios';
import { questionIndex } from '../urls/index';

export const fetchQuestions = () => {
  // questionIndexにgetリクエストを送る
  return axios.get(questionIndex)
  // 成功した場合
  .then(res => {
    return res.data
  })
  // 失敗した場合
  .catch((e) => console.error(e))
}