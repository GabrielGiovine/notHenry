class Activity{
    constructor(id, title, description, imgUrl){
        this.id = id
        this.title = title
        this.description = description
        this.imgUrl = imgUrl
    }
}

class Repository{
    constructor(){
        this.activities = []
        }
    addActivity({title, description, imgUrl}) {}
        
    removeActivities(){
        return this.activities
    }
        
}

describe("demo", function(){
    it("este test debe pasar siempre", function (){
        expect(4+2).toBe(6)
    })
})