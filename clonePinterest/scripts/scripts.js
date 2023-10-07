const cardContainer = document.getElementById("cardContainer");
const numToAddOnScroll = 10;
let loadedCards = 0;

function getRandomImageUrl() {
  const width = Math.floor(Math.random() * (800 - 300 + 1)) + 300;
  const height = Math.floor(Math.random() * (400 - 200 + 1)) + 200;
  return `https://picsum.photos/${width}/${height}/?random=${Math.random()}`;
}

 function addNewCards(size) {
    for (let i = 0; i < numToAddOnScroll; i++) {
        loadedCards++;
        const imageUrl = getRandomImageUrl();
        const cardStructure = `
            <div class="card ${size}">
            <div class="pin_modal">
            <div class="modal_head">
              <div class="save_card">Save</div>
            </div>
      
            <div class="modal_footer">
              <div class="destination">
                <div class="pint_mock_icon_container">
                  <img src="./icons/diagonalderecha.png" alt="upload_arrow" class="pint_mock_icon">
                </div>
                <span>Salomon</span>
              </div>
      
                <div class="pint_mock_icon_container">
                  <img src="./icons/saveupload.png" alt="send" class="pint_mock_icon">
                </div>
      
                <div class="pint_mock_icon_container">
                  <img src="./icons/comments.png" alt="edit" class="pint_mock_icon">
                </div>
              </div>
            </div>
                    <div class="pin_image">
                        <img src="${imageUrl}" alt="pin_image">
                    </div>
                </div>
            </div>
        `;
        cardContainer.innerHTML += cardStructure;
    }
} 

window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const containerHeight = cardContainer.clientHeight;
    const contentHeight = cardContainer.scrollHeight;
    
    if (scrollTop + containerHeight >= contentHeight-100) {
      addNewCards('card_small');
  } else if (scrollTop + containerHeight >= contentHeight-200) {
      addNewCards('card_medium');
  } else if (scrollTop + containerHeight >= contentHeight-300) {
      addNewCards('card_large');
  }
});
addNewCards('card_large');