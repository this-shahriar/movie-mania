import { Button } from "@chakra-ui/button";
import { useContext } from "react";
import { WatchListContext } from "../../contexts/WatchListContext";

const WatchListBtn = ({ variant, item, dark }) => {
  const { watchList, setWatchList } = useContext(WatchListContext);

  return (
    <Button
      onClick={() => {
        if (watchList?.map((wl) => wl.id).includes(item.id)) {
          setWatchList((wl) => wl.filter((mov) => mov.id !== item.id));
        } else {
          const entry = { ...item };
          setWatchList((wl) => (wl ? [...wl, entry] : [entry]));
        }
      }}
      colorScheme={
        dark
          ? watchList?.map((wl) => wl.id).includes(item.id)
            ? "secondary"
            : "text"
          : watchList?.map((wl) => wl.id).includes(item.id)
          ? "secondary"
          : "primary"
      }
      variant={variant}
    >
      {watchList?.map((wl) => wl.id).includes(item.id)
        ? "Remove from watchlist"
        : "Add to watchlist"}
    </Button>
  );
};

export default WatchListBtn;
