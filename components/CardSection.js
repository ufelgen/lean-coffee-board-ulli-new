import Card from "./Card";
import { Fragment } from "react";
export default function CardSection({ array }) {
  return (
    <>
      {array.map((item) => (
        <Fragment key={item.id}>
          <Card name={item.name} thoughts={item.thoughts} />
        </Fragment>
      ))}
    </>
  );
}
