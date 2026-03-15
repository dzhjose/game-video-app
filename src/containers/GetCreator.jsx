import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItem } from "../actions/CreatorAction";
import DetailCreator from "../presentations/DetailCreator";

const GetCreator = ({ id }) => {
  const dispatch = useDispatch();
  const creator = useSelector((state) => state.creators.item);

  useEffect(() => {
    dispatch(getItem(id));
  }, [dispatch, id]);

  return (
    <>
      <DetailCreator creator={creator} />
    </>
  );
};

export default GetCreator;
