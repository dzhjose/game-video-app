import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGame } from "../actions/GamesAction";
import DetailGameItem from "../presentations/DetailGameItem";

const GetGame = ({ id }) => {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.games.game_item);

  useEffect(() => {
    dispatch(getGame(id));
  }, [dispatch, id]);

  const renderGameDetail = () => {
    if (game && Object.keys(game).length > 0) {
      return <DetailGameItem game={game} />;
    }

    return (
      <div>
        <h2>No game detail</h2>
      </div>
    );
  };

  return <>{renderGameDetail()}</>;
};

export default GetGame;
