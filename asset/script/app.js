const items = [{
  id: 1,
  brand: "Anua",
  title: "Heartleaf Pore Control Cleansing Oil 350mL",
  category: "skincare",
  price: '35.5',
  image: './asset/img/items/product_anua.jpeg'
}, {
  id: 2,
  brand: "Biodance",
  title: "Pore Tightening Collagen Ampoule 30mL",
  category: "skincare",
  price: '46',
  image: './asset/img/items/biodance.jpeg'
}, {
  id: 3,
  brand: "Mediheal",
  title: "Vitamin C Brightening Serum 40mL",
  category: "skincare",
  price: '29',
  image: './asset/img/items/product_mediheal.jpeg'
}, {
  id: 4,
  brand: "Cosrx",
  title: "Advanced Snail Radiance Dual Essence 80mL",
  category: "skincare",
  price: '25.45',
  image: './asset/img/items/product_cosrx.jpeg'
}, {
  id: 5,
  brand: "Cosrx",
  title: "COSRX Complexion Clarity Bestsellers Set",
  category: "best",
  price: '29.9',
  image: './asset/img/items/setcosrx_best.jpeg'
}, {
  id: 6,
  brand: "Anua",
  title: "Heartleaf 77% Soothing Toner 350ml",
  category: "skincare",
  price: '29.9',
  image: './asset/img/items/product_anua_2.jpeg'
}, {
  id: 7,
  brand: "Anua",
  title: "Set bestseller Anua Toner+Lotion",
  category: "best",
  price: '48.75',
  image: './asset/img/items/best_set_anua.jpeg'
}, {
  id: 8,
  brand: "Cosrx",
  title: "Low pH Good Morning Gel Cleanser 150ml",
  category: "skincare",
  price: '10.47',
  image: './asset/img/items/cosrx_cleanser.jpeg'
}, {
  id: 9,
  brand: "Biodance",
  title: "Skin Barrier Sun Safe 30mL",
  category: "skincare",
  price: '26',
  image: './asset/img/items/biodance_skin.jpeg'
}, {
  id: 10,
  brand: "Etude",
  title: "Mood Matte Lipstick 3.5getud",
  category: "makeup",
  price: '26',
  image: './asset/img/items/etudehouse_lip.jpeg'
}, {
  id: 11,
  brand: "Beauty of Joseon",
  title: "Pine Grove Body Wash 400mL",
  category: "body",
  price: '25.5',
  image: './asset/img/items/beauty_of_joseon_body.jpeg'
}, {
  id: 12,
  brand: "Goodal",
  title: "Green Tangerine Vita C Dark Spot Care Serum 50ml",
  category: "skincare",
  price: '36',
  image: './asset/img/items/goodal_vitam_C.jpeg'
}, {
  id: 13,
  brand: "Roundlab",
  title: "1025 Dokdo Cleanser 250 ml",
  category: "new",
  price: '21',
  image: './asset/img/items/roundlab_cleanser.jpeg'
}, {
  id: 14,
  brand: "Torriden",
  title: "Solid In Ceramide Lip Essence 11mL",
  category: "makeup",
  price: '10',
  image: './asset/img/items/torriden_lip_essence.jpeg'
}, {
  id: 15,
  brand: "Cosrx",
  title: "Low pH Good Morning Gel Cleanser 150ml",
  category: "skincare",
  price: '11',
  image: './asset/img/items/cosrx_cleanser.jpeg'
}, {
  id: 16,
  brand: "Roundlab",
  title: "1025 Dokdo Cleanser 250 ml_new",
  category: "skincare",
  price: '20.8',
  image: './asset/img/items/roundlab_cleanser.jpeg'
}, {
  id: 17,
  brand: "Etude",
  title: "Curl Fix Mascara",
  category: "makeup",
  price: '16',
  image: './asset/img/items/biodance.jpeg'
}, {
  id: 18,
  brand: "Beauty of Joseon",
  title: "Revive Eye Cream Ginseng + Retinal 30mL",
  category: "skincare",
  price: '16.5',
  image: './asset/img/items/boj_eyecream.jpeg'
}, {
  id: 19,
  brand: "Laneige",
  title: "Cream Skin 170mL Special Set (+50mL)",
  category: "best",
  price: '35.2',
  image: './asset/img/items/laneige_set.jpeg'
}, {
  id: 20,
  brand: "Roundlab",
  title: "Dokdo Ampoule 45g",
  category: "skincare",
  price: '22.99',
  image: './asset/img/items/roundlab_ampoule.jpeg'
}, {
  id: 21,
  brand: "Some by Mi",
  title: "AHA BHA PHA 30 Days Miracle Toner Special Set (150mL+30mL)",
  category: "skincare",
  price: '23.5',
  image: './asset/img/items/some_by_mi.jpeg'
}, {
  id: 22,
  brand: "Etude",
  title: "Play Color Eyes 9 Colors",
  category: "makeup",
  price: '24.9',
  image: './asset/img/items/etude_eyes.jpeg'
}, {
  id: 23,
  brand: "Torriden",
  title: "Pore Dive-In Hyaluronic Acid Soothing Cream 100mL",
  category: "skincare",
  price: '34',
  image: './asset/img/items/torriden_cream.jpeg'
}, {
  id: 24,
  brand: "Goodal",
  title: " Green Tangerine Vita C Dark Spot Care Pad 70P",
  category: "skincare",
  price: '26.5',
  image: './asset/img/items/goodal_pads.jpeg'
}, {
  id: 25,
  brand: "Laneige",
  title: "Neo Foundation Brush 1ea",
  category: "makeup",
  price: '21.6',
  image: './asset/img/items/laneige_brush.jpeg'
}, {
  id: 26,
  brand: "beautyofjoseon",
  title: "Ginseng Essence Water 150mL",
  category: "skincare",
  price: '16',
  image: './asset/img/items/boj_essence.jpeg'
}, {
  id: 27,
  brand: "Mediheal",
  title: "Paper Mulberry 4D White Mask Sheet 10P",
  category: "skincare",
  price: '46',
  image: './asset/img/items/mediheal_mask.jpeg'
}, {
  id: 28,
  brand: "Anua",
  title: "Heartleaft 70% Daily Lotion 200mL",
  category: "skincare",
  price: '28.9',
  image: './asset/img/items/anua_lotion.jpeg'
}, {
  id: 29,
  brand: "Etude",
  title: "Double Lasting Vegan Cover Foundation 30g",
  category: "makeup",
  price: '25.9',
  image: './asset/img/items/etude_foundation.jpeg'
}, {
  id: 30,
  brand: "Biodance",
  title: "Dive In Serum 70mL Large Size Special Set (+Serum 10mL)",
  category: "skincare",
  price: '42.5',
  image: './asset/img/items/torriden_serum.jpeg'
}]

const cardsContainer = document.querySelector('.cards-container')

items.forEach(item => {
  cardsContainer.innerHTML += `
  <article>
    <figure>
      <img src="${item.image}" alt="${item.title}">
    </figure>
    <div>
    <h2>${item.brand}</h2>
    <span><i class="fa-solid fa-cart-shopping"></i></span>
    </div>
    <figcaption>${item.title}</figcaption>
    <h3 id="price">${item.price}€</h3>
  </article>`
})
