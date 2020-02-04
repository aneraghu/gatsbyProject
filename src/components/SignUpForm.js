import React from "react";
import Formol, { Field } from "formol";
import "formol/lib/default.css";
import formJSON from "./form.json"

const handleSubmit = async values => {
  console.log(values);
  // process submission (e.g., send to API)...
 document.getElementsByClassName('result')[0].innerHTML=JSON.stringify(values)
};

var formHtml=[]
const SignUpForm = () => {
  return <Formol onSubmit={handleSubmit} >
    {formJSON.map((data, index) => {
        formHtml.push(<Field required  key={`content_item_${index}`} type={data.inputType} value={data.value} >{data.name}</Field>)
        if(data.children){
          data.children.map((item,i)=>{
              if(item.name=='phone')
              formHtml.push(<Field required  key={`item_children_${index}_${i}`} type={item.inputType}  className="input-child"  pattern="^[0-9]{10}$"
      validityErrors={({ patternMismatch }) =>
        patternMismatch && "Phone Must be 10 digit."
      }>{item.name}</Field>)
      else {
        formHtml.push(<Field required  key={`item_children_${index}_${i}`} type={item.inputType}  className="input-child" >{item.name}</Field>)
      }
          })
        }
    }
  )
}
{formHtml}
<div className="result"></div>
  </Formol>
};
export default SignUpForm;