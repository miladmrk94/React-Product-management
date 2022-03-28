import React, { useEffect, useState } from "react";
import { useProductsAction, selectOptions } from "../ProviderProducts";
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
    <div>
      <form onSubmit={groupNameSubmitHandler}>
        <label>add new group</label>
        <input name="groupName" onChange={changeHandlerTwo} value={valueTwo} />
        <button type="submit">+</button>
      </form>
      <form onSubmit={submitHandler}>
        <Select options={group} value={selector} onChange={selectorHandler} />
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
  );
};

export default ManagementBar;
