import Card from "./Card";
import { Fragment } from "react";

export default function CardSection({
  array,
  onRemoveCard,
  onEditCard,
  editing,
  setEditing,
  setCards,
  editId,
}) {
  return (
    <>
      {array.map((item) => (
        <Fragment key={item.id}>
          <Card
            name={item.name}
            thoughts={item.thoughts}
            id={item.id}
            onRemoveCard={onRemoveCard}
            onEditCard={onEditCard}
            editing={editing}
            setEditing={setEditing}
            setCards={setCards}
            editId={editId}
            array={array}
          />
        </Fragment>
      ))}
    </>
  );
}
