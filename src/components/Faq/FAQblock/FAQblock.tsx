//libs
//components
import QuetionItem from "./QuetionItem/QuetionItem"
//styles
import styles from './styles.module.scss'
import {FC} from "react";

interface Props{
    questions: {
        text: string,
        answer: string
    }[]
}
const FAQblock:FC<Props> = ({questions}) => {

  return (
      <div className={styles.content}>
        <div className={styles.quetionsBlock}>
          {questions.map((item, index) => (
              <QuetionItem key={index} text={item.text} answ={item.answer} />
          ))}
        </div>
      </div>
  )
}

export default FAQblock