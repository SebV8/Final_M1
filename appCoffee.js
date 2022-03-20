const menu = [
    {
      id: 1,
      title: "Esperesso",
      category: "Grano",
      price: 1590,
      img: "./images/item-1.jpg",
      desc: `Café Espresso grano seleccionado 100ml. La dosis sabor y energia para disfrutar en cualquieer momento del dia`,
    },
    {
      id: 2,
      title: "Capuchino",
      category: "Milky",
      price: 5290,
      img: "./images/item-2.jpg",
      desc: `Capuchino grano seleccionado 250ml. Leche caliente, espuma de leche y cafe espresso, la mescla perfecta entre amargor y dulzor`,
    },
    {
      id: 3,
      title: "sweet milkshake",
      category: "Frio",
      price: 4390,
      img: "./images/item-3.jpg",
      desc: `Milkshake de tu sabor favorito: manjar, chocolare, frutilla, banana. Cubierto con la mas espumosa crema y salsas a eleccion.`,
    },
    {
      id: 4,
      title: "Doppio",
      category: "Grano",
      price: 1790,
      img: "./images/item-4.jpg",
      desc: `Café doble Espresso grano seleccionado 180ml. La opcion recomendada para empezar un dia lleno de energia`,
    },
    {
      id: 5,
      title: "Mochaccino",
      category: "Milky",
      price: 2590,
      img: "./images/item-5.jpg",
      desc: `Moccachino grano seleccionado 250ml. café espresso, chocolate, espuma de leche y crema batida. Perfecto para cuando necesitas dulzor en tu dia .`,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "Frio",
      price: 4590,
      img: "./images/item-6.jpg",
      desc: `Prueba nuestro nuevo sabor de milkshake Oreo, con una irresistible textura y cubierta de chocolate con galleta.`,
    },
    {
      id: 7,
      title: "Lungo",
      category: "Grano",
      price: 1790,
      img: "./images/item-7.jpg",
      desc: `Café Lungo grano seleccionado 250ml. Especial seleccion para los momentos de relajo.`,
    },
    {
      id: 8,
      title: "Latte",
      category: "Milky",
      price: 2390,
      img: "./images/item-8.jpg",
      desc: `Café Latte grano seleccionado 300ml. Leche caliente, espresso y espuma de leche, la justa cantidad de sabor que necesitabas.`,
    },
    {
      id: 9,
      title: "Coffe for last",
      category: "Frio",
      price: 2990,
      img: "./images/item-9.jpg",
      desc: `Milshake de espresso grano selecionado. Con extra textura y extra sabor... para cuando simplemente no puedes dejar el sabor del cafe.`,
    },
    {
      id: 10,
      title: "Flat white",
      category: "Milky",
      price: 1790,
      img: "./images/item-10.jpg",
      desc: `Cafe Flat White 250ml. Espresso y espuma de leche, simple sabor para cuando tambien necesitas la energia del espresso.`,
    },
  ];
  // get parent element
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  // display all items when page loads
  window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
  });
  
  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
  
      return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");  
    sectionCenter.innerHTML = displayMenu;
  }
  function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["Todos"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "Todos") {
          diplayMenuItems(menu);
        } else {
          diplayMenuItems(menuCategory);
        }
      });
    });
  }