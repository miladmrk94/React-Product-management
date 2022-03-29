import React, { useEffect, useState } from "react";
import { useProductsAction, selectOptions } from "../ProviderProducts";
import styles from "./ManagementBar.module.scss";
import Select from "react-select";

//get options from ProviderProducts Comp
const options = selectOptions;

const ManagementBar = () => {
  const dispatch = useProductsAction();
  const [value, setValue] = useState("");
  const [valueTwo, setValueTwo] = useState("");
  const [selector, setSelector] = useState("");
  const [group, setGroup] = useState(options);

  const groupNameSubmitHandler = (e) => {
    e.preventDefault();
    console.log(e.target.elements.groupName.value);
    const groupEvent = e.target.elements.groupName.value;
    console.log(group);

    groupEvent === ""
      ? alert("Please choose a name for the group")
      : setGroup([
          ...group,
          {
            value: groupEvent,
            label: groupEvent,
          },
        ]);
    setValueTwo("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (e.target.elements.productName.value === "") {
      alert("*** Enter the product name! ***");
    } else {
      if (selector > "") {
        dispatch({ type: "addProduct", event: e, selectorEvent: selector });
        setValue("");
      } else {
        alert("*** plz select Group ***");
      }
    }
  };

  const selectorHandler = (e) => {
    setSelector(e);
  };
  const changeHandler = (e) => {
    setValue(e.target.value);
  };
  const changeHandlerTwo = (e) => {
    setValueTwo(e.target.value);
  };
  const restAppHandler = () => {
    localStorage.clear();
    window.location.reload();
  };

  useEffect(() => {
    const options = JSON.parse(localStorage.getItem("groupList"));
    if (options) {
      setGroup(options);
    }
  }, []);

  //set selectOptions on LocalStorage
  useEffect(() => {
    localStorage.setItem("groupList", JSON.stringify(group));
  }, [group]);

  return (
    <div className={styles.container}>
      <h3>Add New Group:</h3>
      <div className={styles.box__group}>
        <form onSubmit={groupNameSubmitHandler}>
          <input
            name="groupName"
            onChange={changeHandlerTwo}
            value={valueTwo}
            placeholder="Group Name..."
          />
          <button type="submit">+</button>
        </form>
      </div>

      <h3>Add Products:</h3>
      <div className={styles.box__product}>
        <form onSubmit={submitHandler}>
          <Select
            options={group}
            value={selector}
            onChange={selectorHandler}
            placeholder="Select Group..."
          />
          <input
            type="text"
            placeholder="Product Name..."
            name="productName"
            // ref={clearInput}
            onChange={changeHandler}
            value={value}
          />
          <button type="submit">ADD</button>
        </form>
      </div>
      <div className={styles.box__rest}>
        <button onClick={restAppHandler}>Rest App</button>
        <h5>Clear All Data </h5>
      </div>
    </div>
  );
};

export default ManagementBar;
