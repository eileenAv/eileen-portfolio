import React from 'react';
import './oilpainting.css';

const colors = [
  { name: 'Titanium White', color: '#ffffff' },
  { name: 'Lemon Yellow', color: '#fff44f' },
  { name: 'Yellow Lake', color: '#f8de7e' },
  { name: 'Indian Yellow', color: '#e3a857' },
  { name: 'Scarlet Lake', color: '#ff2400' },
  { name: 'Cadmium Red', color: '#e30022' },
  { name: 'Ultramarine Blue', color: '#3f00ff' },
  { name: 'Phthalocyanine Green', color: '#008b72' }
];

function Oilpainting() {
  return (
    <div className="App">
      <header className="main-title">
        Oil Painting: A Quick Guide to Getting Started
      </header>
      <section className="get-started-section">
        <p>
          Oil painting has been a good hobby of mine! Here I will tell you about soem of the important steps to getting startet to oil paint. Please Enjoy!</p>
        <p>There are two sections to this guide: </p>
        <p>
        <a href="#gather-section">Gather Materials </a> </p>
        <p> <a href="#painting-section">Start Painting</a>
        </p>



        <img
  src="https://www.skillshare.com/blog/wp-content/uploads/2023/04/oil-paint-textures-1024x572.jpg"
  alt="Oil Painting Example"
  className="painting-image"
/>

      </section>

      <section  id="gather-section" className="gather-materials-section">
        <h2>1) Gather Materials </h2>
        <p>
            This is the section where we go over how to get the materials that you need to start your oil painting journey!
        </p>
        <div className="columns-container">
          <div className="column">
            <h3> Choosing Oil Paints </h3>
            <p>
            The most important part of the oil painting process is the types of colors that you need. You do not need to have a lot of colors on your palette because you can always mix colors to make your desired color. </p>
         <p>Having a limited palette also improves your color mixing and color theory skills, which is an important skill for an artist. Below are the most essential colors that a beginner should have:
            </p>

                <section className="color-list-section">
        <ul className="color-list">
          {colors.map((item, index) => (
            <li key={index}>
              <span
                className="color-box"
                style={{ backgroundColor: item.color }}
              ></span>
              {item.name}
            </li>
          ))}
        </ul>
      </section>

          </div>
          

          <div className="column">
            <h3>Choosing Your Surface</h3>
            <p>
                Many different surfaces can be used to start oil painting. The most common surfaces used by oil painters are traditional stretched canvas, a ‘canvas board’ or a ‘canvas panel’.
            </p>
        <div className="column image-placement-container">


   <div className="image-placement-container">
      <div className="background-square"></div>

      <div className="image-wrapper top-left">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_GjFgsR-lUziYaVs9OSYY59_X8EG49SGIEw&s"
          alt="Titanium White"
          className="positioned-image"
        />
        <div className="hover-text"> Canvas Board</div>
      </div>

      <div className="image-wrapper top-right">
        <img
          src="https://de2wfhoo6xqi5.cloudfront.net/orig/e44/c65/8848cca0ddd9a521a9bd9a65fbdaa99fb4.jpg"
          alt="Lemon Yellow"
          className="positioned-image"
        />
        <div className="hover-text">traditional stretched canvas</div>
      </div>

      <div className="image-wrapper bottom-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS44WRzZJalRPMd2Xjlo4LbQNGjTSomG-xnVg&s"
          alt="Ultramarine Blue"
          className="positioned-image"
        />
       <div className="hover-text">Canvas Panel</div>
      </div>
    </div>

</div>

          </div>
        </div>
      </section>

      <section  id="painting-section" className="gather-materials-section2">
        <h2>2) Start Painting </h2>
        <p>
            This is the section gives you advice on how to start your oil painting!
        </p>
        <div className="columns-container2">
          <div className="column2">
            <h3> Oil Painting Techniques  </h3>
            <p> There are many different ways to paint. Some of these teqniques are: </p>
                    <lu>
                <li><strong>WET-ON-WET or ‘ALLA PRIMA‘ (direct painting)</strong></li>
                <p>This technique is when you aplly all of the paint before it had dried</p>
                   <img
  src="https://www.malcolmdeweyfineart.com/uploads/1/2/5/7/12572015/claude-monet-impression-sunrise_orig.jpg"
  alt="Oil Painting Example"
  className="painting-image"
/>
                <li><strong>LAYERED PAINTINGS (indirect painting)</strong></li>
                <p>This is a technqiue where you wait for one layer to dry before you apply paint to it.</p>
                   <img
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsyiM7xWB0-zcgrcfexRE7S4Dz6NpOkXJivw&s"
  alt="Oil Painting Example"
  className="painting-image"
/>
            </lu>


          </div>
          

          <div className="column2">
            <h3>How to Thin your paint</h3>
            <p>
               There are two ways that you can thin your oil paint in oil painting: Spirits and oil. Spirits can be toxic, so do your reserach before you pick
               what kind of spirits you want to use. Winsor & Newton’s <strong>Sansador</strong> or Gamblin’s <strong>Gamsol </strong>are pretty safe. Different types of oil include  
               Linseed, safflower, walnut or poppy oils. 
            </p>
            <img
  src="https://www.jacksonsart.com/blog/wp-content/uploads/2018/04/Mixed_Brand_Solvents_Atmos_3.jpg"
  alt="Oil Painting Example"
  className="painting-image"
/>
    
      </div>
        </div>
      </section>

    </div>
    


  );
}

export default Oilpainting;
