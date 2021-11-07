module.exports = class {
    body;
    size;
    [Symbol.toStringTag] = '^_^';
    valueOf() {
        return this;
    };
    [Symbol.iterator] () {
        const self = this;                
        let current = 0;        
        return {
            next () {                
                if (current < self.size)                    
                    return {
                        done: false,
                        value: self.body[current++]
                    }
                else {
                    return {
                        done: true
                    }
                }
            }
        }
    }
    constructor (...theArgs) {
        this.size = 0;
        this.body = [];        
        if (theArgs.length) {            
            for (let i = 0; i < theArgs.length; i++) {
                this.add(theArgs[i]);
            }
        } 
    }    
    keys () {
        return this.body;
    }
    values(){
        return this.body;
    }
    entries() {               
        return this.body.map(el => el = [el, el])    
    }

    clear(){
        this.size = 0;
        this.body = [];
    }
    add(item){                        
        if (!(this.body.includes(item))) {            
            this.body[this.size] = item;            
            this.size++;            
        }
        return this;
    }
    delete(item){
        this.body = this.body.filter(el => el !== item);
    }
    has(item){
        return this.body.includes(item);
    }
    forEach(callback, data){
        const cl = callback.bind(data);
        this.body.map(el => cl(el));
    };
}