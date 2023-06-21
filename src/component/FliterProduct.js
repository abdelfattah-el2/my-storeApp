import { useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { categoryfetch } from "../rtx-store/Slices/category-slice";
import "../App.css";
import { fliter, all } from "../rtx-store/Slices/products-Slice";

function FliterProducts() {
  let category = useSelector((state) => state.allcategory);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(categoryfetch());
  }, []);

  return (
    <Dropdown className="m-2 position-sticky  top-8 z-3 ">
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Filter
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.ItemText
          className="btncP "
          title=" "
          onClick={(e) => {
            dispatch(all(e.target.title));
            ee = new Date();
          }}
        >
          All
        </Dropdown.ItemText>
        {category.map((item) => {
          return (
            <Dropdown.ItemText
              className="btncP "
              title={item}
              key={item}
              onClick={(e) => {
                dispatch(fliter(e.target.title));
                ee = new Date();
              }}
            >
              {item}
            </Dropdown.ItemText>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export let ee = "";
export default FliterProducts;
