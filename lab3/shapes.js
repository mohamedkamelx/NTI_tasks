class Shape{
    #area;
    constructor(){
        this.#area;
        if( this.instructor=='Shape'){
            throw 'cant create row shape'
        }
    }
    calc_area(params) {
        this.#area=params
    }
    get_area(){
        return this.#area
    }
}


export class Circle extends Shape{
    constructor(r){
        super()
        this.radius = r;
    }
    calc_area() {
        let v = Math.PI*this.radius *this.radius 
        super.calc_area(v)
    }
    get_area(){
        console.log(`area is : ${super.get_area()} \nradius is ${this.radius}`)
    }
}


export class Square extends Shape{
    constructor(l){
        super()
        this.length = l;
    }
    calc_area(){
        let v = this.length * this.length
        super.calc_area(v)
    }
    get_area(){
        console.log(`area is : ${super.get_area()} \nlength is ${this.length}`)
    }
}


export class Rectangle extends Shape{
    constructor(l,w){
        super()
        this.length = l;
        this.width = w;
    }
    calc_area(){
        let v = this.length * this.width
        super.calc_area(v)
    }
    get_area(){
        console.log(`area is : ${super.get_area()} \nlength is ${this.length} \nwidth is ${this.width}`)
    }
}

