import React from 'react';
import FavouriteContext from '../store/favourite-context';
import MeetupList from '../components/meetups/MeetupList';
function FavoritesPage() {
    const favouriteCtx = React.useContext(FavouriteContext);
    let content;
    if (favouriteCtx.totalFavourites === 0) {
      content = <p>You got no favourites yet. Start adding some?</p>;
    } else {
      content = <MeetupList meetups={favouriteCtx.favourites} />;
    }
    return (
      <div>
        <h1>Favorites Page</h1>
        {content}
      </div>
    );
  }
  
  export default FavoritesPage;
  