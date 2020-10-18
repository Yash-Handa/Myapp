import React from "react";
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function Footer() {
  return (
    <div>
      <footer class="footer mt-auto py-2">
        <div class="container">
          <p className="footer-text">&copy; 2020 Made with love <FavoriteIcon /></p>
        </div>
      </footer>
    </div>
  );
}
