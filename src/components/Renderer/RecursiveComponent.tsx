import { useState } from 'react';
import styles from './RecursiveComponent.module.scss'
import Button from '../Button/Button';
import Form from '../Form';


interface Props {
    //TODO give percise type
    data:any[]
}

const RecursiveComponent: React.FC<Props> = ({ data }) => {
    const [componentData,setComponentData] = useState(data);
    const [input,setInput] = useState('');

    const addItem = (name:string) => {
        setComponentData([...componentData , {name}]);
      };
      const removeItem = (name:string) => {
        setComponentData(componentData.filter((item)=>item.name!==name));
      };
    return (
      <div className={styles.component}>
        {componentData.map((item)=>{
        return (
          <div key={item.name}>
            <span> - {item.name}</span>
            {/* //TODO rename to input */}
            <Form input={input} setInput={()=>setInput}/>
            {/* <Button name='+' action={()=>addItem('test')}></Button> */}
            <Button name='+' action={()=>addItem(input)}></Button>
            <Button name='-' action={()=>removeItem(item.name)}></Button>
            <div>
              {item.children && <RecursiveComponent data={item.children} />}
            </div>
          </div>
        )}
        )}
      </div>
    );
  };

  export default RecursiveComponent