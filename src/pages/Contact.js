
import React, { useEffect, useState } from "react";
import Button from '../Components/Button';
import Form from '../Components/Form';

function Contact() {
  const [buttonType, setButtonType] = useState('')
  const [inputText, setInputText] = useState('')
  
  const handleChange = (e) => {
    const {value} = e.target
    setInputText(value)
  }

useEffect(() => {
  inputText.length === 0 ? setButtonType('disabled') : setButtonType('default')
}, [inputText])

  useEffect(() => {
    (async () => {
      if (buttonType==='inProgress') {
        try {
          const timeout = await setTimeout(() => {
            alert('your message will be sent at some point! :)')
            setButtonType('default')
            setInputText('')
          }, 3000)();
          clearTimeout(timeout)
           
        } catch (error) {
          console.error(error)
        }
      }
    })()
  }, [buttonType])
  
  const handleClick = () => setButtonType('inProgress')
  
  return (
    <div className="min-h-full flex flex-1 flex-col items-center ">
      <h2 className="my-4">This is contact page</h2>

      <Form text={inputText} onChangeText={handleChange} />

      <Button contentType={buttonType} label='Click Me!' onPress={handleClick} />
    </div>
  );
}

export default Contact;
