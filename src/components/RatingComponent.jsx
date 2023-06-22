
import "../styles/ratingComponent.css";
import { Button } from "./Button";
import { ButtonStar } from "./ButtonStar";
import { ButtonSubmit } from "./ButtonSubmit";

export const RatingComponent = () => {

  return (
    <div className="container">
      <div className="button-container">
        <ButtonStar />
      </div>
      <div className="title-card">
        <p>How did we do?</p>
      </div>
      <div className="text-card">
        <p>
          Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering
        </p>
      </div>
      <div className="buttons-card">
        <Button >1</Button>
        <Button >2</Button>
        <Button >3</Button>
        <Button >4</Button>
        <Button >5</Button>
      </div>
      <div className="submit-button">
        <ButtonSubmit />
      </div>
    </div>
  );
};
