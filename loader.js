class Loader{
    constructor(parentElement = document.body){
        this.parentElement = parentElement
        this.loader = document.createElement('div')
        this.img = document.createElement('img')

        this.loader.style.cssText = "width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;"
        this.img.style.cssText = "width: 7%; height: auto; max-width: 200px;"

        this.img.src = "https://copycornerjobs.com/Resources/loading.gif"

        this.loader.append(this.img)
        this.spawn()
    }

    spawn(){
        this.capture = this.parentElement.innerHTML
        this.parentElement.innerHTML = ""
        this.parentElement.append(this.loader)
    }

    destroy(flag=true){
        return new Promise((resolve, reject)=>{
            this.loader.remove()
            if(flag){
                this.parentElement.innerHTML = this.capture
            }
            resolve()
        })
    }
}