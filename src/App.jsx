import { List, Avatar, Button, Input, Space } from 'antd';
import './App.css';
import { useState } from 'react';

function App() {
  const [inpValue, setInpValue] = useState('');
  const [data, setData] = useState([
    {
      title: 'Demo To Do',
    },
  ])

  function remove(event) {
    let deleteBtn = event.target.closest('.ant-list-item');
    if (deleteBtn) {
      deleteBtn.remove();
    }
  };

  // function remove() {
  //   let deleteBtn = document.querySelector("#deleteBtn").parentElement;
  //   let deleteBtn2 = deleteBtn.parentElement;
  //   let deleteBtn3 = deleteBtn2.parentElement;
  //   let deleteBtn4 = deleteBtn3.parentElement;
  //   let deleteBtn5 = deleteBtn4.parentElement;

  //   deleteBtn5.remove();
  // }

  function add() {
    if (inpValue.trim() !== '') {
      setData([...data, { title: inpValue }])
      setInpValue("")

    } else { window.alert("Please Fill The Input") }
  }

  return (
    <>
      <Space>
        <div className='inp-con'>
          <Input variant="outlined" value={inpValue} placeholder="Type here..." id='inp' onChange={(event) => {
            setInpValue(event.target.value)
          }} />
          <Button type="primary" size="large" onClick={add}>Click To Add</Button>
        </div>
      </Space>
      <br />
      <div className='con'>
        <List
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                title={<li>{item.title}<i onClick={remove} id='deleteBtn' className="fa-solid fa-trash"></i></li>}
              />
            </List.Item>
          )}
        />
      </div>
    </>
  );
}

export default App;
