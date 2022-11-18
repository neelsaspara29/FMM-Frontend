import { useFormikContext } from "formik";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { applyfilter } from "../../../Redux/Filter/actionCreator";

function Searchtrigger() {
    const dispatch = useDispatch();
  const { values } = useFormikContext();
  useEffect(() => {
      dispatch(applyfilter(values));
  }, [values]);

  return null;
}

export default Searchtrigger;
