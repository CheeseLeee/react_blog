export class EventBus {
    constructor(){
        this.callback = []
    }
    on(name,fn){
        let exist = false
        this.callback.forEach((item,index) => {
            if(item.name === name){
                exist = true
            }
        })
        if(exist){
            return
        }else{
            this.callback.push({
                name,
                fn
            })
        }

    }
    emit(name){
        this.callback.forEach((item,index) => {
            if(item.name === name){
                item.fn()
            }
        })
    }
}