document.addEventListener("DOMContentLoaded", () => {
    const ratingItems = document.querySelectorAll("#rating-container li");
    const submitButton = document.getElementById("submit-btn");
    const ratingState = document.getElementById("rating-state");
    const thankYouState = document.getElementById("thank-you-state");
    const selectedRatingSpan = document.querySelector("#selected-rating span");
    let selectedValue = null;
  
    // Evento para seleccionar la calificación
    ratingItems.forEach((item) => {
      item.addEventListener("click", () => {
        // Remover clase activa de todos los elementos
        ratingItems.forEach((item) => item.classList.remove("active"));
  
        // Agregar clase activa al elemento seleccionado
        item.classList.add("active");
  
        // Guardar el valor seleccionado
        selectedValue = item.getAttribute("data-rating");
      });
    });
  
    // Evento para enviar la calificación
    submitButton.addEventListener("click", () => {
      if (selectedValue) {
        // Actualizar el estado "Thank you" con la calificación seleccionada
        selectedRatingSpan.textContent = selectedValue;
  
        // Ocultar el estado de calificación y mostrar el estado "Thank you"
        ratingState.style.display = "none";
        thankYouState.style.display = "block";
      } else {
        alert("Please select a rating before submitting.");
      }
    });
  });
  