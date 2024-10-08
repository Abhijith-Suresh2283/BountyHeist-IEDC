import React, { useState } from 'react';
import './tasks.css';
import Coins from "../../img/coins.png";
import { Flex, Input, Typography, message } from "antd";

const Tasks = () => {
  const [code, setCode] = useState("");

  const handleSubmit = () => {
    console.log("Referral code submitted: ", code);
  };

  return (
    <div className='tasku'>
      <div className="redeemdiv">
      <h3>Enter the Referral-Code</h3>
      <p>Enter 6-character alphanumeric code that was generated by your friend</p>
      <Flex className="optt" gap="middle" align="flex-start" vertical>
        <Input.OTP
          length={7}
          size="large"
          onChange={(e) => setCode(e)}
          value={code}
        />
      </Flex>

      <button className="redsub" onClick={handleSubmit}>
        Submit
      </button>
    </div>

      {/* Tasks Section */}
      <p className='taskup'>Complete the following tasks to receive even more rewards</p>

      <div className="taskgrid">
        <div className="taskind">
          <h3>Task 1</h3>
          <div className="tcoin">
            <img src={Coins} alt="Coins image"/>
            <p>500</p>
          </div>
          <p>Description of Task 1</p>
          <button className='comp'>Complete</button>
        </div>
        <div className="taskind">
          <h3>Task 2</h3>
          <div className="tcoin">
            <img src={Coins} alt="Coins image"/>
            <p>400</p>
          </div>
          <p>Description of Task 2</p>
          <button className='comp'>Complete</button>
        </div>
        <div className="taskind">
          <h3>Task 3</h3>
          <div className="tcoin">
            <img src={Coins} alt="Coins image"/>
            <p>200</p>
          </div>
          <p>Description of Task 3</p>
          <button className='comp'>Complete</button>
        </div>
        <div className="taskind">
          <h3>Task 4</h3>
          <div className="tcoin">
            <img src={Coins} alt="Coins image"/>
            <p>1500</p>
          </div>
          <p>Description of Task 4</p>
          <button className='comp'>Complete</button>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
