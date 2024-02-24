import TestMessage from "./testMessage";

const func = () => {
  console.log('Hello, World!');
  const value = TestMessage.message;
  console.log(value);
}

func();