window.addEventListener('keydown',(e)=>{
  const container = document.querySelector('.container')
  const keys = document.querySelectorAll('.key')
  
  container.innerHTML = `
  <div class='key'>
    <h2>${e.key}</h2>
    <small>e.key</small>
  </div>
  <div class='key'>
    <h2>${e.keyCode}</h2>
    <small>e.keyCode</small> 
  </div>
  <div class='key'>
    <h2>${e.code}</h2> 
    <small>e.code</small>
  </div>`
})