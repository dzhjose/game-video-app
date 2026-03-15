import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreators } from "../actions/CreatorAction";
import CreatorItem from "../presentations/CreatorItem";

const ListVideos = () => {
  const dispatch = useDispatch();
  const creators = useSelector((state) => state.creators.items);

  useEffect(() => {
    dispatch(fetchCreators());
  }, [dispatch]);

  const renderCreatorItem = () => {
    if (creators && creators.length > 0) {
      return (
        <div className="columns is-multiline">
          {creators.map((creator) => (
            <CreatorItem key={creator.id} creator={creator} />
          ))}
        </div>
      );
    }

    return <h2 className="subtitle">No creators items to see</h2>;
  };

  return <>{renderCreatorItem()}</>;
};

export default ListVideos;
