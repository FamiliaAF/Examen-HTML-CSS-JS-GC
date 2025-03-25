// const linksOpen = document.querySelectorAll('.link-open');

// linksOpen.forEach(link => {
//   link.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log('click');
//   })
// });

const images = [
  {id: 1, src: "https://images.unsplash.com/photo-1740309591727-9d5d2ae2f3ec?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: 'Image 1'},
  {id: 2, src: 'https://images.unsplash.com/photo-1601464961884-b23500993163?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Image 2'},
  {id: 3, src: 'https://images.unsplash.com/photo-1742054292312-7bd7d3984b40?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Image 3'},
  {id: 4, src: 'https://images.unsplash.com/photo-1742144897659-8a3e8a0a090c?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Image 4'},
  {id: 5, src: 'https://images.unsplash.com/photo-1742268350523-70a032f3520d?q=80&w=1068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Image 5'},
  {id: 6, src: 'https://images.unsplash.com/photo-1742268350468-345079a1081b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Image 6'},
  {id: 7, src: 'https://images.unsplash.com/photo-1742275346989-2d696fa2c9b3?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Image 7'},
  {id: 8, src: 'https://images.unsplash.com/photo-1741850826368-12d515927617?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Image 8'},
  {id: 9, src: 'https://images.unsplash.com/photo-1742041675087-dc3ceacd88cb?q=80&w=1135&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Image 9'},
  {id: 10, src: 'https://images.unsplash.com/photo-1742129726461-ea9c742d3860?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Image 10'},
]

const container = document.querySelector('.container');
const dialog = document.querySelector('#img-dialog');
const dialogImg = document.querySelector("#dialog-img");
const closeDialog = document.querySelector('#close-dialog');

images.forEach(image => {
  const img = document.createElement('img');
  img.src = image.src;
  img.alt = image.title;
  img.title = image.title;

  img.addEventListener('click', () => {
    dialogImg.src = img.src;
    dialog.showModal();
  });

  container.appendChild(img);
});

closeDialog.addEventListener('click', () => {
  dialog.close();
});
