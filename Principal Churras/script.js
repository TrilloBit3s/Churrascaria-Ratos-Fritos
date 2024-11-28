// Função para alternar entre a imagem original e a nova imagem
let currentImage = "img/pix.png"; // Inicialmente a imagem é a original

function changeImage(newImage) {
  const mainImage = document.getElementById('mainImage');

  // Verifica se a imagem atual é a original (pix.png)
  if (currentImage === "img/pix.png") {
    // Muda para a nova imagem (pix1, pix2, etc.)
    mainImage.src = newImage;
    currentImage = newImage; // Atualiza para a nova imagem
  } else {
    // Se a imagem não for a original, volta para a imagem original
    mainImage.src = "img/pix.png";
    currentImage = "img/pix.png"; // Reseta para a imagem original
  }
}
