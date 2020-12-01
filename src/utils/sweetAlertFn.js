import Swal from 'sweetalert2';

export const swallBasic = (icon, text) => {
  Swal.fire({
    icon: icon,
    text: text,
  });
};
export const editSwall = () => {};
export const deleteSwall = (func, func2) => {
  Swal.fire({
    title: 'Apakah anda yakin?',
    text: 'data akan dihapus!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'ya, hapus!',
    cancelButtonText: 'tidak',
  }).then((result) => {
    if (result.value) {
      func().then((res) => {
        console.log(res);
        if (res) {
          Swal.fire('Terhapus!', 'data telah dihapus', 'success');
          func2();
        } else {
          swallBasic('error', 'ops, ada yang error!');
        }
      });
      Swal.fire('Terhapus!', 'data telah dihapus', 'success');
      Swal.showLoading();
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire('batal', 'data masih aman :)', 'error');
    }
  });
};
