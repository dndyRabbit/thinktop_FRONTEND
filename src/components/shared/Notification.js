import Swal from "sweetalert2";

export const confirmation = (title, text) => {
  return Swal.fire({
    title,
    text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ya, hapus ini!",
  });
};

export const error = async (title) => {
  let timerInterval;
  return Swal.fire({
    title,
    html: "I will close in <b></b> milliseconds.",
    timer: 1500,
    icon: "error",
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  });
  //   .then((result) => {
  //     /* Read more about handling dismissals below */
  //     if (result.dismiss === Swal.DismissReason.timer) {
  //       console.log("I was closed by the timer");
  //     }
  //   });
};

export const success = async (title) => {
  let timerInterval;
  return Swal.fire({
    title,
    html: "I will close in <b></b> milliseconds.",
    timer: 1500,
    icon: "success",
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  });
  //   .then((result) => {
  //     /* Read more about handling dismissals below */
  //     if (result.dismiss === Swal.DismissReason.timer) {
  //       console.log("I was closed by the timer");
  //     }
  //   });
};

export const warning = async (title) => {
  let timerInterval;
  return Swal.fire({
    title,
    html: "I will close in <b></b> milliseconds.",
    timer: 1500,
    icon: "warning",
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  });
  //   .then((result) => {
  //     /* Read more about handling dismissals below */
  //     if (result.dismiss === Swal.DismissReason.timer) {
  //       console.log("I was closed by the timer");
  //     }
  //   });
};
