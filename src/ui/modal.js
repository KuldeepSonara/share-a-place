const loderTemplate = document.getElementById('loading-modal-content');

const showLoader = (message = '')=>{
    if (!loderTemplate) {
        console.error('Loader template not found!');
        showFallBackmessage('Error: Loader template not found!');
        return;
      }
    const modalEl = document.importNode(loderTemplate.content, true);
    const backdrop = document.createElement('div');
    backdrop.classList.add('backdrop'); 

    
    const content = modalEl.querySelector('.modal__content')

    if(message){
        const magmessageEl = document.createElement('p');
        magmessageEl.textContent = message;
        content.appendChild(magmessageEl);
    }

    document.body.appendChild(backdrop);
    document.body.appendChild(modalEl);
    // setTimeout(() => {
    //     hideLoader();
    //   }, 3000);

}

const hideLoader = ()=>{
    const backdrop = document.querySelector('.backdrop');
    const modalEl = document.querySelector('.modal__content');

    if(backdrop){
        setTimeout(()=>{backdrop.remove()},400);
    }
    if(modalEl && modalEl.parentElement){
        setTimeout(()=>{modalEl.parentElement.remove()},500);
    }
}


const showFallBackmessage  = (message)=>{
    hideLoader();
    const modalErroeEl = document.createElement('div');
    modalErroeEl.classList.add('modal');
    modalErroeEl.innerHTML = `
    <div class="modal__content centered">
      <p>${message}</p>
    </div>
  `;
  
  const backdrop = document.createElement('div');
  backdrop.classList.add('backdrop');
  document.body.appendChild(backdrop);
  document.body.appendChild(modalErroeEl);


  const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.id = 'close-modal';
    closeButton.classList.add('modal-close-button');
    modalErroeEl.appendChild(closeButton);

    // Add event listener for the close button
    closeButton.addEventListener('click', () => {
      if (backdrop) backdrop.remove();
      const modal = document.querySelector('.modal');
      if (modal) modal.remove();
    });
}

