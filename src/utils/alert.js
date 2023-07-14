let showAlert = (alert, isSuccess) => {
    if(isSuccess){
        
        alert.className = 'alert'
        alert.classList.add('alert-success')
        alert.classList.add('show')
        setTimeout(()=>{
            alert.classList.remove('show')
        }, 1500)
    }else{
        console.log("fail")
        alert.className = 'alert'
        alert.classList.add('alert-danger')
        alert.classList.add('show')
    }
}

export default showAlert