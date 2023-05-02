import React from "react";

import "./AboutInfo.css";

const AboutInfo = () => {
  return (
    <div className="section">
      <div className="container grid-container">
        <div>
          <div className="about-info-content">
            <h2 className="heading-secondary">
              A few words <span>about us</span>
            </h2>

            <h4>Let us introduce ourselves</h4>

            <p>
            Tacos is a full service bar and restaurant, featuring a large garden
              patio, offering creative Mexican fare that is tasty. Our menu features
              gourmet fish tacos, burritos, salads and quesadillas and tasty guacamole
              dip. Blending a culinary philosophy that pays tribute to a rich legacy.
            </p>

            <blockquote>
            Enjoy our dazzling dishes and make the most of your eating background with us!
            </blockquote>

            <p>
            We feature a menu that changes daily with a focus on seasonal and local cuisine. 
            Heirloom grains are milled fresh for house made pastas, breads and desert and whole 
            animal butchery is done on site.
            </p>
          </div>
        </div>

        <div>
          <div className="about-info-content">
            <h2 className="heading-secondary">
              A PLACE TO WINE, A PLACE <span>TO DINE</span>
            </h2>

            <h4>We hope to see you soon!</h4>

            <p>
            Tequila aged in smoke barrels for more than a year resulting in a golden amber colour with a soft, smooth and complex finish.
            </p>

            <blockquote>
              This award-winning wine destination merits uncommon notice.
            </blockquote>

            <p>
            There are two ways to dine with us. One is off the menu which offers small plates, pastas and deserts which are all meant to be shared. 
            In addition to our printed menu, guests can also order directly off circulating carts that stop by during their meal to try ‘dim sum bites’.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
