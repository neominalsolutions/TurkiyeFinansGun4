import React from "react";
import { useDispatch } from "react-redux";
import { decrement } from "../store/CounterSlice";

type Props = {};

export default function Increment({}: Props) {
  const dispatch = useDispatch();

  const onDecrement = () => {
    // action tetikleyerek state güncellemek için dispatch kullanıyoruz
    dispatch(decrement());
  };

  return (
    <div>
      <button onClick={onDecrement}> (-) </button>
    </div>
  );
}
