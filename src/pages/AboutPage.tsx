import React from 'react'
import {useHistory} from 'react-router-dom'
const AboutPage: React.FC = () => {
  const history = useHistory()
return (
  <>
    <h1>Страница информации</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
      Fugiat, natus? Non eaque eius earum! 
      Quaerat repellat dignissimos soluta vel accusantium fugiat, 
      quo delectus molestias illo aspernatur quidem, 
      placeat quisquam consequuntur?
    </p>
    <button 
      className="btn"
      onClick={()=> {history.push('/')}}>
        Обратно
    </button>
  </>
)
}

export default AboutPage;