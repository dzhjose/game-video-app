import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from "../actions/GamesAction";
import GameItem from "../presentations/GameItem";

const ListGames = () => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games.game_items);

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  const renderGames = () => {
    if (games && games.length > 0) {
      return (
        <div className="columns is-multiline">
          {games.map((game) => (
            <GameItem key={game.id} game={game} />
          ))}
        </div>
      );
    }

    return <h2 className="subtitle">No games items to see</h2>;
  };

  return <>{renderGames()}</>;
};

export default ListGames;
