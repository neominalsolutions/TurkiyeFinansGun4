import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/Store";

type Props = {};

export default function Count({}: Props) {
  // useSelector Hook ile Count state içerisinde counter değerine bağlanır.
  const counterState = useSelector((state: RootState) => state.countState);
  // güncel state değerini okuma işlemi yaptık

  return <div>Count : {counterState.counter}</div>;
}
