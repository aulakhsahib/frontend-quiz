/* eslint-disable react/prop-types */
import clsx from "clsx";
import "./RadioButton.css";
export default function RadioButton({
  name,
  value,
  checkedValue,
  setCheckedValue,
  children,
  defaultBtn,
  selected,
  correctSelected,
  incorrectSelected,
  correctDidNotSelected,
  disableBtn,
}) {
  const classesToAdd = clsx("default-button", {
    "": defaultBtn,
    "selected-button": selected,
    "correct-selected-button": correctSelected,
    "incorrect-selected-button": incorrectSelected,
    "correct-didnot-selected-button": correctDidNotSelected,
  });

  return (
    <div>
      <label className={classesToAdd}>
        <div className="inner-tag-container">
          <span className="option-tally">{children[0]}</span>
          <p className="option-content">{children[1]}</p>
        </div>
        <input
          type="radio"
          name={name}
          value={value}
          checked={checkedValue === value}
          onChange={(e) => setCheckedValue(e.target.value)}
          disabled={disableBtn}
        />
      </label>
    </div>
  );
}

RadioButton.propTypes = {
  propsValidator(props) {
    const {
      defaultBtn,
      selected,
      correctSelected,
      incorrectSelected,
      correctDidNotSelected,
    } = props;
    if (
      Number(!!defaultBtn) +
        Number(!!selected) +
        Number(!!correctSelected) +
        Number(!!incorrectSelected) +
        Number(!!correctDidNotSelected) >
      1
    ) {
      throw new Error(
        "You can only use either of one prop from the following: defaultBtn, selected, correctSelected, incorrectSelected, correctDidNotSelected"
      );
    }
  },
};
/* 
1. default
2. selected
3. correctSelected (you selected the right option)
4. incorrectSelected (you selected the wrong option)
5. correctDidNotSelected (gets highlighted when you selected wrong option to specify what correct answer was)
 */

/* 
For form options you will use map function in real project.

For RadioButton, I want
1. name
2. value
3. setCurrentSelectedValue This will be used in onChange(This uses setter from parent. For eg, e => setterFromParent(e.target.value))
4. currentSelectedValue (used in checked attribute)
5. children will be used as label
*/
