<template>
    <div>
    <div>
        <p>Enter details</p>
        <form  >
            <input id='info' placeholder='matric' name='info'/>
            <input id='pass' placeholder='password' name='pass'/>
            <input type='submit' id='sub'  />
        </form>
    </div>
    <div id='res'>
    </div>
    </div>
</template>

<script>
window.onload = () => {
  // let info = document.querySelector('#info')
  // let pass = document.querySelector('#pass')
  let sub = document.querySelector('#sub')
  let res = document.querySelector('#res')
  sub.onclick = async () => {
    fetch('/app/login', {
      method: 'GET'
      // body: {info: info.value, pass: pass.value},
    }).then(function (data) {
      res.innerText = 'Got ' + data.data.message
      console.log(data.data.message)
    }).catch(function (err) {
      res.innerText = 'Received: ' + err
    })
    /* let resp = await fetch('http://localhost:3030/login')
    res.innerText = 'Got ' + resp.message
    console.log(resp.data) */
  }
}
</script>
